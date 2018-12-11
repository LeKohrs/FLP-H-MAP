import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    'Clients': {
      'bobbyOneAndOnlyDole': {
        'name': 'Bob Dole',
        'password': '12345',
        'questions': ['Client', 'Child', 'Auto Loan'],
        'answers': {} 
      },
      'barryDotDole': {
        'name': 'Barry Dole',
        'password': '1234567',
        'questions': ['Client', 'Child', 'Auto Loan', 'Please upload final pay stub for each place of employment', 'Mortgage'],
        'answers': {}
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
