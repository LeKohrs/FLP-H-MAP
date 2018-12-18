<template>
  <div class="form-data">
    <h3>H-Map Form</h3>
    <!-- <h2>Information for {{ selectedUser.firstName }} {{ selectedUser.lastName }}</h2>
        <div class="admin__selected-user__answers">
          <form @submit.prevent="editQuestions" class="edit-questions__form">
            <div class="field--client">
              <h3>{{ selectedUser.questions[10].title }}</h3>
              <div class="client-questions">
                <label for="client-name">Name:</label>
                <input type="text" name="client-name" v-model="selectedUser.questions[10].questions[0]['Name']">
                <label for="client-name">Date of Birth:</label>
                <input type="text" name="client-birthday" v-model="selectedUser.questions[10].questions[1]['Date of Birth']">
              </div>
            </div>
          </form>
        </div> -->
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'DataForm',
  data() {
    return {
      // client: this.$store.state.selectedClient,
      // clientFirstName: this.$store.state.selectedClient.firstName,
      // clientLastName: this.$store.state.selectedClient.lastName,
      // clientQuestions: this.$store.state.selectedClient.questions,
      // allQuestions: this.$store.state.questions 
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang='scss'>

</style>

