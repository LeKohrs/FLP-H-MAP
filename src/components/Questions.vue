<template>
  <div class="questions">
    <h3>Add questions for {{ this.$route.params.slug }}.</h3>
    <form @submit.prevent="addQuestions" class="add-questions__form">
    <ul class="questions-list">
      <li v-for="(question, key) in questions" :key="key" class="question">
        <input type="checkbox" name="question" v-bind:value="question.slug" v-model="question.checked">
        <label for="question">{{ question.title }}</label>
      </li>
    </ul>
    <button @click.prevent="submitQuestions" class="btn">Add Questions</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import ThankYou from '@/components/ThankYou.vue'


export default {
  name: "Questions",
  data() {
    return {
      questions: [],
      user: null,
      userQuestions: [],
    };
  },
  methods: {
    submitQuestions() {
      this.questions.forEach(question => {
        if(question.checked) {
          let questionStructure = {
            title: question.title,
            subQuestions: []
          }
          if(question.questions) {
            let subQuestions = {}
            for(let subQuestion of question.questions) { 
              subQuestions[subQuestion] = ''
            }
            questionStructure.subQuestions = subQuestions
          }
          this.userQuestions.push(questionStructure)  
          
          db.collection('users').doc(this.user.id).update({
            questions: this.userQuestions
          }).then(() => {
            this.$router.push({ name: 'ThankYouAdmin', params: { thanks: 'thank-you' } })
          })
        }
      })
    }
  },
  created() {
    let ref = db.collection('users').where('slug', '==', this.$route.params.slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.user = doc.data()
        this.user.id = doc.id
      })
    })
    if(!this.questions.length > 0)
    this.questions = this.$store.state.questions
  }
};
</script>

<style lang='scss'>
</style>

