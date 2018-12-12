<template>
  <div class="questions">
    <h3>Possible Questions to send to client</h3>
    <ul class="questions-list">
      <li v-for="(question, key) in questions" :key="key" class="question">
        <input type="checkbox" name="question" v-bind:value="question.slug">{{ question.title }}</input>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      questions: []
    };
  },
  methods: {},
  created() {
    if(!this.questions.length > 0)
    this.questions = this.$store.state.questions;
    console.log(this.questions);
  }
};
</script>

<style lang='scss'>
</style>

