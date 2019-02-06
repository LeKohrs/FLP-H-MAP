<template>
  <div class="clients">
    <h3>List of clients</h3>
    <ul class="clients-list">
      <li v-for="(user, key) in users" :key="key" class="user">
        <a @click="selectClient(user.slug)" href="#">{{ user.firstName }} {{ user.lastName }}</a>
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
    }
  },
  methods: {
    selectClient(slug) {
      this.$store.commit('setCurrentClient', slug)
    }
  },
  computed: {
    users() {
      let userList = []
      let users = this.$store.state.allUsers
      for(let user of users) {
        if (user.role === 'user') {
          userList.push(user)
        }
      }
      return userList
    }
  },
}
</script>

<style lang='scss'>
  
</style>

