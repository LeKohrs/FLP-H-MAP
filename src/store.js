import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import db from "@/firebase/init"

Vue.use(Vuex)
Vue.use(firebase)

export default new Vuex.Store({
  state: {
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
    updateSelectedUser(state, data) {
      state.selectedUser = data.doc.data()
    },
    setCurrentClient(state, value) {
      state.currentClient = value;
      this.dispatch("setSelectedUser");
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
