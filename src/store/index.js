import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import db from "@/firebase/init"
import ImportModule from './importModule'

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  modules: {
    imports: ImportModule
  },
  state: {
    ignoreNewDebt: false,
    year: null,
    openTray: false,
    questions: [],
    users: [],
    activeUser: null,
    currentClient: null,
    thankYou: false,
    selectedUser: '',
    userId: null,
    showLogin: true,
    loggedinUser: {
      role: "guest"
    },
    allUsers: []
  },
  getters: {
    allUsers(state) {
      return state.allUsers;
    }
  },
  mutations: {
    setUsers(state, data) {
      if (data.type == "added") {
        state.allUsers.push(data.doc.data());
      } else if (data.type == "modified") {
        state.allUsers = state.allUsers.filter(otherUser => {
          return otherUser.user_id != data.doc.data().user_id;
        });
        state.allUsers.push(data.doc.data());
      } else if (data.type == "removed") {
        state.allUsers = state.allUsers.filter(otherUser => {
          return otherUser.user_id != data.doc.data().user_id;
        });
      }
    },
    updateIgnoreNewDebt(state, message) {
      state.ignoreNewDebt = message
    },
    updateSelectedUser(state, data) {
      state.selectedUser = data.doc.data()
    },
    setCurrentClient(state, value) {
      state.currentClient = value;
      this.dispatch("setSelectedUser");
    },
    toggleTray(state) {
      state.openTray = !state.openTray
    }
  },
  actions: {
    getUsers(context) {
      let ref = db.collection("users");
      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          context.commit("setUsers", change);
        });
      });
    },
    setSelectedUser(context) {
      let ref = db.collection("users").where("slug", "==", context.state.currentClient);
      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          context.commit("updateSelectedUser", change);
        });
      });
    }
  }
});
