<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/client">Client</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import 'reset-css'
import db from '@/firebase/init'


export default {
  components: {
    Header
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
    db.collection('clients').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let client = doc.data()
        client.id = doc.id
        this.$store.state.clients.push(client)
      })
    })
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
