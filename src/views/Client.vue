<template>
  <div class="client">
    <h1>This is the Client page</h1>
    <Questionnaire />
    <ThankYou />
  </div>
</template>

<script>
import Questionnaire from '@/components/Questionnaire.vue'
import ThankYou from '@/components/ThankYou.vue'

export default {
  name: 'client',
  components: {
    Questionnaire,
    ThankYou
  }
}
</script>
