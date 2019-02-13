<template>
  <div class="client">
    <div class="client__intro">
      Please answer the questions to the best of your ability.
      <button>Continue</button>
    </div>
    <div v-if="selectedUser !== undefined && showClientQuestions" class="admin__selected-client">
        <ClientForm v-if="selectedUser" v-bind:selectedUser = "selectedUser" />
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
