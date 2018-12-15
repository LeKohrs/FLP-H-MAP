<template>
  <div class="questions">
    <h3>Add questions for {{ this.$route.params.slug }}.</h3>
    <form @submit.prevent="addQuestions" class="add-questions__form">
    <ul class="questions-list">
      <li v-for="(question, key) in questions" :key="key" class="question">
        <input type="checkbox" name="question" v-bind:value="question.slug">
        <label for="question">{{ question.title }}</label>
      </li>
    </ul>
    <button class="btn">Add Questions</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "Questions",
  data() {
    return {
      questions: [],
      user: null
    };
  },
  methods: {
    addQuestions() {

    }
  },
  created() {
    let ref = db.collection('users').where('slug', '==', this.$route.params.slug)
    ref.get().then(snapshot => {
      console.log(snapshot)
      snapshot.forEach(doc => {
        // this.user = doc.data()
        console.log(doc.data())                
        // this.user.id = doc.id
      })
    }).then(() => {
      console.log(this.user)
    })
    if(!this.questions.length > 0)
    this.questions = this.$store.state.questions
  }
};
</script>

<style lang='scss'>
</style>

