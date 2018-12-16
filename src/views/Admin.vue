<template>
  <div class="admin">
    <section class="admin__sidebar">
      <div class="clients">
        <h3>List of clients</h3>
        <ul class="clients-list">
          <li v-for="(user, key) in users" :key="key" class="user">
            <a @click="selectClient(user.slug)" href="#">{{ user.firstName }} {{ user.lastName }}</a>
          </li>
        </ul>
      </div>
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
    </section>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Admin',
  data() {
    return {
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
      userQuestions: [],      
    }
  },
  methods: {
    createClient() {
      this.showCreateClient = true
      this.showThankYou = false
    },
    selectClient(slug) {
      
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
          let questionStructure = {
            title: question.title,
            subQuestions: []
          }
          if(question.questions) {
            let subQuestions = {}
            for(let subQuestion of question.questions) { 
              subQuestions[subQuestion] = ''
            }
            questionStructure.subQuestions = subQuestions
          }
          this.userQuestions.push(questionStructure)  
          
          let ref = db.collection('users').where('slug', '==', this.slug)
          ref.get().then(snapshot => {
            snapshot.forEach(doc => {
              this.createdUser = doc.data()
              this.createdUser.id = doc.id
            })
          }).then(() => {
            db.collection('users').doc(this.createdUser.id).update({
              questions: this.userQuestions
            }).then(() => {
              this.showThankYou = true
              this.showQuestions = false
            })
          }) 
        }
      })
    },
    checkListOfObjects(obj, list) {
      for (let x of list) {
        if(list[x] === obj) {
          return true;
        }
      }
      return false;
    }
  },
  created() {
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
  }
}
</script>
<style lang="scss">
  .admin {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    &__sidebar {
      width: 200px;
    }
    &__main {
      width: calc(100% - 200px);
    }
  }
</style>

