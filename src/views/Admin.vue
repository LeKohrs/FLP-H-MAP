<template>
  <div class="admin">
    <section class="admin__sidebar">
      <ClientList />
      <button @click.prevent="showCreateClient = true" class="admin__create-new-client">Create New Client</button>
    </section>
    <section class="admin__main">
      <div v-if="showCreateClient" class="admin__create-client">
        <CreateClient />      
      </div>
    </section>
  </div>
</template>

<script>
import ClientList from '@/components/ClientList.vue'
import CreateClient from '@/components/CreateClient.vue'

export default {
  name: 'Admin',
  components: {
    ClientList,
    CreateClient
  },
  data() {
    return {
      showClientList: true,
      showCreateClient: false,
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
  .admin {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    &__sidebar {
      width: 200px;
    }
    &__main {
      width: calc(100% - 200px);
    }
  }
</style>

