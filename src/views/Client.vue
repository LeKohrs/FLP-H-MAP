<template>
  <div class="client">
    <div v-if="selectedUser !== undefined && showClientQuestions" class="admin__selected-client">
        <DataForm v-bind:selectedUser = "selectedUser" />
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import DataForm from '@/components/DataForm.vue'

export default {
  name: 'client',
  components: {
    DataForm
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
      selectedUser: this.$store.state.selectedUser,
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
          this.$store.state.selectedUser = doc.data()
          console.log(this.$store.state.selectedUser)
          this.$store.state.loggedinUser.id = doc.id
          localStorage.setItem('user', localStorage.getItem('user'))
        })
      })
    this.selectedUser = this.$store.state.loggedinUser
  },
}
</script>
