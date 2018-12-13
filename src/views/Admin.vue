<template>
  <div class="admin">
    <h1>This is the Admin page</h1>
    <ClientList />
    <Questions />
    <CreateClient />
  </div>
</template>

<script>
import Questions from '@/components/Questions.vue'
import ClientList from '@/components/ClientList.vue'
import CreateClient from '@/components/CreateClient.vue'

export default {
  name: 'Admin',
  components: {
    Questions,
    ClientList,
    CreateClient
  }
}
</script>
