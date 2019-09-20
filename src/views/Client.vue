<template>
  <div class="client">
    <div v-if="selectedUser !== undefined && showClientQuestions" class="client__selected-client">
        <ClientForm v-if="selectedUser" v-bind:selectedUser = "selectedUser" />
        <button class="delete-client" @click.prevent="deleteAccount">Delete Account</button>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import ClientForm from '@/components/ClientForm.vue'

export default {
  name: 'client',
  components: {
    ClientForm,
  },
  data() {
    return {
      msg: 'You must enter a value in all fields',
      showThankYou: false,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      username: null,
      feedback: null,
      slug: null,
      questions: [],
      showClientQuestions: true, 
    }
  },
  methods: {
    deleteAccount() {
      var user = firebase.auth().currentUser;

      user.delete().then(() => {
        this.$store.state.loggedinUser = null
        this.$store.state.selectedUser = null
        localStorage.setItem('user', '')
        this.$store.state.showLogin = true        
        this.$router.push({ name: 'home' })
        // User deleted.
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
    },
    logout() {
      
    }
  },
  mounted() {
    if(!this.$store.state.loggedinUser) {
      this.$router.push({ name: 'home' })
    }
    let ref = db.collection('users').where('user_id', '==', localStorage.getItem('user'))
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.$store.state.loggedinUser = doc.data()
          // this.$store.state.selectedUser = doc.data()
          this.$store.state.loggedinUser.id = doc.id
          localStorage.setItem('user', localStorage.getItem('user'))
          this.$store.commit('setCurrentClient', doc.data().slug)
        })
      })
  },
  computed: {
    selectedUser() {
      return this.$store.state.selectedUser
    }
  },
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
  $color-red: #c4546d;

  .client__intro {
    button {
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
  .delete-client {
    position: fixed;
    // margin: 20px 0 40px 33px;
    padding: 5px 15px;
    max-width: 20px;
    bottom: 33px;
    left: 33px;
    border-radius: 10px;
    border: none;
    box-shadow: none;
    background-color: rgba($color-grey-light, .3); 
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba($color-grey-light, 0);
    cursor: pointer;
    transition: .3s ease-out;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      max-width: 500px;
      box-shadow: 2px 2px 5px $color-grey-light;
      background-color: $color-red; 
      color: $color-white;
    }
  }
</style>
