<template>
  <div class="thanks">
    <p v-if="clientPage">Thanks for answering these questions, Client Person!</p>
    <p v-if="adminPage">Thanks! Questions have been submited.</p>
    <router-link tag="button" to="/admin">Return to the admin page</router-link>
  </div>
</template>

<script>
export default {
  name: 'ThankYou',
  props: ['id'],
  data() {
    return {
      msg: '',
      clientPage: false,
      adminPage: false
    }
  },
  mounted() {
    if(this.$route.path === '/client/thank-you') {
      this.clientPage = true
      this.adminPage = false
    }
    else if(this.$route.path === '/admin/thank-you') {
      this.adminPage = true
      this.clientPage = false
    }
  }
}

</script>

<style lang='scss'>

</style>

