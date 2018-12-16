<template>
  <div class="form-data">
    <h3>H-Map Form</h3>
    <p class="client-name">{{ clientFirstName }} {{ clientLastName }}</p>
  </div>
</template>

<script>
export default {
  name: 'DataForm',
  data() {
    return {
      client: this.$store.state.currentClient,
      clientFirstName: this.$store.state.currentClient.firstName,
      clientLastName: this.$store.state.currentClient.lastName,
      clientQuestions: this.$store.state.currentClient.questions,
      clientAnswers: this.$store.state.currentClient.answers,
      allQuestions: this.$store.state.questions 
    }
  },
  methods: {

  },
  created() {
    this.allQuestions = this.$store.state.question
  }
}
</script>

<style lang='scss'>

</style>

