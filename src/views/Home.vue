<template>
  <div class="home">
    <div v-if="showLogin" class="login">
      <form @submit.prevent="login" action="">
        <h2>Login</h2>
        <div class="field">
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password">
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <div class="field">
          <button>Login</button>
        </div>
      </form>
    </div>
    <div v-if="showMap" class="hmap">

    </div>
    <Hmap />
    <DataForm />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import Hmap from '@/components/Hmap.vue'
import Login from '@/components/Login.vue'
import DataForm from '@/components/DataForm.vue'


export default {
  name: 'home',
  components: {
    Hmap,
    Login,
    DataForm
  },
  data() {
    return {
      selectedUser: null,
      email: null,
      password: null,
      feedback: null,
      showMap: false,
      showLogin: true
    }
  },
  methods: {
    login() {
      if(this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred.user)
          // this.$router.push({ name: 'home' })
          this.showMap = true
          this.showLogin = false
        }).catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  },
  created() {

  }
}
</script>
