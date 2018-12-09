import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: {
      'Bank Account': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Balance on December 31,'],
        'show': false 
      },
      'Investment Account': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Contributions during current year', 'Withdrawals during current year', 'Balance on December 31,'],
        'show': false 
      },
      'HSA Account': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Contributions during current year', 'Withdrawals during current year', 'Balance on December 31,'],
        'show': false  
      },
      'Retirement Account': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Contributions during current year', 'Withdrawals during current year', 'Balance on December 31,'],
        'show': false 
      },
      '529 Plan Account': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Contributions during current year', 'Withdrawals during current year', 'Balance on December 31,'],
        'show': false 
      },
      'Mortgage': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Balance on December 31,'],
        'show': false 
      },
      'Auto Loan': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Balance on December 31,'],
        'show': false 
      },
      'Student Loan': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Balance on December 31,'],
        'show': false 
      },
      'Credit Card': {
        'possible': 3,
        'questions': ['Balance on January 1,', 'Balance on December 31,'],
        'show': false 
      },
      'Child': {
        'possible': 15,
        'questions': ['Name', 'Date of Birth'],
        'show': false 
      },
      'Client': {
        'possible': 2,
        'questions': ['Name', 'Date of Birth'],
        'show': false 
      },
      'Amount of child support recieved': {
        'possible': 1,
        'show': false 
      },
      'Amount of alimony recieved': {
        'possible': 1,
        'show': false 
      },
      'Amount of financial gifts from families': {
        'possible': 1,
        'show': false 
      },
      'Please upload final pay stub for each place of employment': {
        'possible': 6,
        'show': false 
      }
    },
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
