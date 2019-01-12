<template>
  <div class="clients">
    <h3>List of clients</h3>
    <ul class="clients-list">
      <li v-for="(user, key) in users" :key="key" class="user">
        <a @click="selectClient(user.slug)" href="#">{{ user.username }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'ClientList',
  data() {
    return {
      users: []
    }
  },
  methods: {
    selectClient(slug) {
      for(let user of this.users) {
        if(user.slug === slug) {
          this.$store.state.currentClient = user
          this.$router.push({ name: 'clientHmap', params: { slug: slug } })
        }
      }
    }
  },
  created() {
    db.collection('users').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let user = doc.data()
        user.id = doc.id
        user.role = 'user'
        this.users.push(user)
      })
    })
  }
}
</script>

<style lang='scss'>
  
</style>

