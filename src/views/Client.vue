<template>
  <div class="client">
    <h1>This is the Client page</h1>
    <Questionnaire />
  </div>
</template>

<script>
import Questionnaire from '@/components/Questionnaire.vue'

export default {
  name: 'client',
  components: {
    Questionnaire
  }
}
</script>
