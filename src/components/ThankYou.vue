<template>
  <div class="thanks">
    <h3>Thanks for Answering the questions</h3>
    <p v-if='clientPage'>Thanks for answering these questions, Client Person!</p>
    <p v-else-if="adminPage">Thanks! Questions have been submited.</p>
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
    if(this.$route.path === '/client') {
      this.clientPage = true
      this.adminPage = false
    }
    else if(this.$route.path === '/admin') {
      this.adminPage = true
      this.clientPage = false
    }
  }
}

</script>

<style lang='scss'>

</style>

