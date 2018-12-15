<template>
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
      <div v-if="thankYou" class="thank-you-message">
        <ThankYou />      
        <button @click.prevent="resetCreateUser" class="create-another-user">Create Another User</button>  
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'CreateClient',
  components: {
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null,
      thankYou: this.$store.state.thankYou,
      showChooseQuestions: false      
    }
  },
  methods: {
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
                slug: this.slug
              })
            }).then(() => {
              console.log(this.slug)
              this.$router.push({ name: 'AddQuestions', params: { slug: this.slug } })
            })
            .catch(err => {
              console.log(err)
              this.feedback = err.message
            })
          }
        })
        console.log(this.slug)
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
    }
  }
}
</script>

<style lang='scss'>

</style>

