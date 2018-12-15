<template>
  <div class="clients">
    <h3>List of clients</h3>
    <ul class="clients-list">
      <li v-for="(user, key) in users" :key="key" class="user">
        <a @click="selectClient(user.username)" href="#">{{ user.username }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClientList',
  data() {
    return {
      users: this.$store.state.users
    }
  },
  methods: {
    selectClient(name) {
      for(let user of this.users) {
        if(user.username === name) {
          this.$store.state.activeUser = user
        }
      }
    }
  }
}
</script>

<style lang='scss'>

</style>

