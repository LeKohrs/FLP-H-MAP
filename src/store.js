import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    users: [],
    activeUser: null,
    currentClient: '',
    thankYou: false,
    selectedUser: null,
    userId: null,
    showLogin: true,
    loggedinUser: {
      role: 'guest'
    }
  },
  mutations: {

  },
  actions: {

  }
})
