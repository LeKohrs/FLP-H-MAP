<template>
  <div class="create-client">
    <h3>Create new client here.</h3>
    <form @submit.prevent="createUser" class="create-client__form">
      <h2>Signup</h2>
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
import ThankYou from '@/components/ThankYou.vue'

export default {
  name: 'CreateClient',
  components: {
    ThankYou
  },
  data() {
    return {
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null,
      thankYou: this.$store.state.thankYou
    }
  },
  methods: {
    createUser() {
      if(this.username && this.email && this.password) {
        this.slug = slugify(this.username, {
          replacemtn: '-',
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
                username: this.username,
                user_id: cred.user.uid
              })
            }).then(() => {
              this.thankYou = true
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

