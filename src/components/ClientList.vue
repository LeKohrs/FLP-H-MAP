<template>
  <div class="clients">
    <h3>List of clients</h3>
    <ul class="clients-list">
      <li v-for="(client, key) in clients" :key="key" class="client">
        <a @click="selectClient(client.name)" href="#">{{ client.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClientList',
  data() {
    return {
      clients: this.$store.state.clients
    }
  },
  methods: {
    selectClient(name) {
      for(let client of this.clients) {
        if(client.name === name) {
          this.$store.state.activeClient = client
        }
      }
      // this.$store.state.activeClient =
    }
  }
}
</script>

<style lang='scss'>

</style>

