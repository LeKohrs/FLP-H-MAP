<template>
  <div class="admin">
    <h1>This is the Admin page</h1>
    <ClientList />
    <Questions />
    <CreateClient />
    <ThankYou />
  </div>
</template>

<script>
import Questions from '@/components/Questions.vue'
import ThankYou from '@/components/ThankYou.vue'
import ClientList from '@/components/ClientList.vue'
import CreateClient from '@/components/CreateClient.vue'

export default {
  name: 'Admin',
  components: {
    Questions,
    ThankYou,
    ClientList,
    CreateClient
  }
}
</script>
