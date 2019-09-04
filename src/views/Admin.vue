<template>
  <div class="admin">
    <section class="admin__sidebar">
      <ClientList />
      <button @click.prevent="createClient" class="admin__create-new-client">Create New Client</button>
    </section>
    <section class="admin__main">
      <div v-if="showCreateClient" class="admin__create-client">
        <div class="close" @click="closeModal" >X</div>
        <div class="create-client">
          <h2>Create new client</h2>
          <form @submit.prevent="createUser" class="create-client__form">
            <div class="field">
              <label for="firstName">First Name:</label>
              <input type="text" name="firstName" v-model="firstName">
            </div>
            <div class="field">
              <label for="lastName">Last Name:</label>
              <input type="text" name="lastName" v-model="lastName">
            </div>
            <div class="field">
              <label for="email">Email:</label>
              <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="username">
            </div>
            <p class="feedback" v-if="feedback">{{ feedback }}</p>
            <button class="btn">Create User</button>
          </form>
        </div>     
      </div>
      <div v-if="showQuestions" class="admin__pick-questions">
        <div class="questions">
          <h2>Add questions for {{ firstName }} {{ lastName }}.</h2>
          <form @submit.prevent="addQuestions" class="add-questions__form">
          <ul class="questions-list">
            <li v-for="(question, key) in questions" :key="key" class="question">
              <input type="checkbox" name="question" v-bind:value="question.slug" v-model="question.checked">
              <label for="question">{{ question.title }}</label>
            </li>
          </ul>
          <button @click.prevent="submitQuestions" class="btn">Add Questions</button>
          </form>
        </div>
      </div>
      <div v-if="showThankYou" class="admin__thank-you">
        <div class="thanks">
          <p>Thanks! Questions have been submited.</p>
        </div>   
      </div>
      <div v-if="selectedUser" class="admin__selected-client">
        <DataForm v-bind:selectedUser = "selectedUser" /> 
        <!-- <DataForm  /> -->
      </div>
    </section>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import DataForm from '@/components/DataForm.vue'
import ClientList from '@/components/ClientList'

export default {
  name: 'Admin',
  components: {
    DataForm,
    ClientList
  },
  data() {
    return {
      msg: 'You must enter a value in all fields',
      showClientList: true,
      showCreateClient: false,
      showQuestions: false,
      showThankYou: false,
      users: [],
      createdUser: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null,
      showChooseQuestions: false,
      questions: [],
      showSelectedClient: false,
    }
  },
  methods: {
    createClient() {
      this.showCreateClient = true
      this.showThankYou = false
      this.showSelectedClient = false
    },
    selectClient(slug) {
      let ref = db.collection('users').where('slug', '==', slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.selectedUser = doc.data()
          this.$store.state.selectedUser = doc.data()
          this.selectedUser.id = doc.id
        })
      }).then(() => {
        this.showCreateClient = false
        this.showSelectedClient = true
      })
    },
    createUser() {
      if(this.username && this.email && this.password) {
        this.slug = slugify(this.username, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists) {
            this.feedback = 'This alias already exists.'
          } else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              ref.set({
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                user_id: cred.user.uid,
                slug: this.slug,
                role: 'user'
              })
            }).then(() => {
              this.showQuestions = true
              this.showCreateClient = false
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'You must enter all fields.'
      }
    },
    resetCreateUser() {
      this.thankYou = false
      this.email = null
      this.password = null
      this.username = null
      this.feedback = null
      this.slug = null
    },
    submitQuestions() {
      this.questions.forEach(question => {
        if(question.checked) {
          question.show = true
        }
      })
      let ref = db.collection('users').where('slug', '==', this.slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.createdUser = doc.data()
          this.createdUser.id = doc.id
        })
      }).then(() => {
        db.collection('users').doc(this.createdUser.id).update({
          questions: this.questions
        }).then(() => {
          this.showThankYou = true
          this.showQuestions = false
          this.resetCreateUser()
          this.questions.forEach(question => {
            question.show = false
            question.checked = false
          })
        })
      }) 
    },
    closeModal() {
      this.showCreateClient = false
    }
  },
  computed: {
    selectedUser() {
      return this.$store.state.selectedUser
    }
  },
  created() {
    if(localStorage.getItem('user')) {
      this.$store.state.userId = localStorage.getItem('user')
      let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.$store.state.loggedinUser = doc.data()
          this.$store.state.loggedinUser.id = doc.id
          this.$store.state.showLogin = false
        })
      }).then(() => {
        if(this.$store.state.loggedinUser.role === 'admin') {
          let ref = db.collection('users')
          ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              if(change.type == 'added') {
                let user = change.doc.data()
                this.users.push(user)
              }
            })
          })

          db.collection('questions').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              let question = doc.data()
              question.id = doc.id
              question.checked = false
              question.show = false
              this.questions.push(question)
            })
          })
        } else {
          this.$router.push({ name: 'client' })
        }
      })
    }
    else {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="scss">

  $color-green-light: #b0c986;
  $color-green: #7ba636;
  $color-green-dark: #577937;
  $color-blue: #b5c7e8;
  $color-white: #fff;
  $color-black: #333333;
  $color-grey: #666;
  $color-grey-light: #999;
  $color-blue-dark: #014584;

  .admin {
    display: flex;

    .close {
      display: inline-block;
      position: absolute;
      top: 40px;
      right: 65px;
      padding: 10px 12px;
      border-radius: 50%;
      border: 1px solid $color-green-dark;
      color: $color-green-dark;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all .3s ease-out;

      &:hover {
        background-color: $color-green-dark;
        color: $color-white;
      }
    }

    &__sidebar {
      margin-right: 25px;
      padding-left: 10px;
      border-right: 1px solid $color-grey-light;

      h3 {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 12px;
      }
      .clients {
        padding: 10px 40px 10px 15px;
      }
      .user {
        margin-bottom: 5px;

        a {
          text-decoration: none;
          color: $color-black;
          transition: .3s ease-out;

          &:hover {
            color: $color-green-dark;
          }
        }
      }
      button {
        display: block;
        margin: 0 auto;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: $color-green;
        color: $color-white;
        font-weight: 700;
        cursor: pointer;
        transition: .3s ease-out;

        &:hover {
          box-shadow: 2px 2px 5px $color-grey-light;
        }
      }
    }
    &__main {
      width: calc(100% - 200px);
      height: 100vh;
    }
    &__pick-questions,
    &__create-client {
      position: absolute;
      padding: 100px;
      left: 50%;
      top: 50%;
      background-color: $color-white;
      border: 2px solid $color-green-light;
      transform: translate(-50%, -50%);
      z-index: 2;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h2 {
        align-self: center;
        margin-bottom: 30px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
      }
      .field {
        margin-bottom: 10px;
        text-align: left;

        &:last-child {
          margin-top: 10px;
          align-self: center;
        }

        input {
          margin-left: 5px;
          border: none;
          border-bottom: 1px solid $color-black;
        }
      }
      .btn {
        margin: 20px 0 40px;
        padding: 10px 30px;
        border-radius: 10px;
        border: none;
        box-shadow: none;
        background-color: $color-green; 
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        color: $color-white;
        cursor: pointer;
        transition: .3s ease-out;

        &:hover {
          box-shadow: 2px 2px 5px $color-grey-light;
        }
      }
    }
  }
</style>

