<template>
  <div class="home">
    <Hmap />
    <Login />
    <div class="hmap__form-tray">
      <DataForm />  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hmap from '@/components/Hmap.vue'
import Login from '@/components/Login.vue'
import DataForm from '@/components/DataForm.vue'
import db from '@/firebase/init'


export default {
  name: 'home',
  components: {
    Hmap,
    Login,
    DataForm
  },
  created() {
    db.collection('questions').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let question = doc.data()
        question.id = doc.id
        this.$store.state.questions.push(question)
      })
    })
  }
}
</script>
