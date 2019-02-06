<template>
  <div class="admin">
    <section class="admin__sidebar">
      <ClientList />
      <!-- <div class="clients">
        <h3>List of clients</h3>
        <ul class="clients-list">
          <li v-if="user.role === 'user'" v-for="(user, key) in users" :key="key" class="user">
            <a @click="selectClient(user.slug)" href="#">{{ user.firstName }} {{ user.lastName }}</a>
          </li>
        </ul>
      </div> -->
      <button @click.prevent="createClient" class="admin__create-new-client">Create New Client</button>
    </section>
    <section class="admin__main">
      <div v-if="showCreateClient" class="admin__create-client">
        <div class="create-client">
          <h3>Create new client here.</h3>
          <form @submit.prevent="createUser" class="create-client__form">
            <h2>Signup</h2>
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
            <div class="field">
              <button class="btn">Create User</button>
            </div>
          </form>
        </div>     
      </div>
      <div v-if="showQuestions" class="admin__pick-questions">
        <div class="questions">
          <h3>Add questions for {{ firstName }} {{ lastName }}.</h3>
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
      <div v-if="selectedUser !== null" class="admin__selected-client">
        <!-- <DataForm v-bind:selectedUser = "selectedUser" /> -->
        <DataForm  />
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
  },
  computed: {
    seletedUser() {
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
    }
  }
</style>

