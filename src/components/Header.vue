<template>
  <div class="header">
    <img class="header__logo" alt="FLP logo" src="../assets/flp-logo.png">
    <div class="header__title">
    <h2 class="header__title--main"><span>H-</span>MAP</h2>
    <p class="header__title--sub">Holistic Money Allocation Profile</p>      
    </div>
    <div class="header__buttons">
      
      <DataImporter v-if="$route.name === 'admin'"/>
      <div @click.prevent="toHome" v-if="$route.name === 'admin'" class="button button--admin">
        <p>Map</p>
      </div>
      <div class="button button--print" v-if="$route.name === 'home'" v-on:click="printMap">
        <p>Print Map</p>
      </div>
      <div @click.prevent="toAdmin" v-if="$store.state.loggedinUser && $store.state.loggedinUser.role === 'admin' && $route.name === 'home'" class="button button--admin">
        <p>Admin</p>
      </div>
      <div v-if="!$store.state.showLogin" class="button button--logout logout" @click.prevent="logout">
        <p>Log out</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import DataImporter from './DataImporter'
import printJS from 'print-js'

export default {
  name: 'Header',
  components: {
    DataImporter
  },
  data() {
    return {

    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$store.state.loggedinUser = null
        this.$store.state.selectedUser = null
        localStorage.setItem('user', '')
        this.$store.state.showLogin = true        
        this.$router.push({ name: 'home' })
      })
    },
    toAdmin() {
      this.$router.push({ name: 'admin' })
    },
    toHome() {
      this.$router.push({ name: 'home' })
    },
    printMap() {
      const head = document.head.innerHTML;
      const svg = document.querySelector('.hmap__map').innerHTML;
      const mywindow = window.open('', 'Print', 'height=600,width=800');
      mywindow.document.write(`<html><head>${head}`);
      mywindow.document.write('</head><body >');
      mywindow.document.write(svg);
      mywindow.document.write('</body></html>');
      mywindow.document.close();
      mywindow.onload= () => { 
        mywindow.focus();
        mywindow.print();
        mywindow.close();
      };
    }
  },
  created() {
    if(localStorage.getItem('user')) {
      this.$store.state.userId = localStorage.getItem('user')
      let ref = db.collection('users').where('user_id', '==', this.$store.state.userId)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.$store.state.loggedinUser = doc.data()
          this.$store.state.loggedinUser.id = doc.id
        })
      }).then(() => {
        this.$store.state.showLogin = false
        if(this.$store.state.loggedinUser.role === 'user') {
          this.$router.push({ name: 'client' })
        }
      })
    }
    else {
      this.$store.state.showLogin = true
    }
  }
}
</script>

<style lang='scss'>
  @import "../scss/variables.scss";

  .header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;

    &__logo {
      max-width: 200px;
      margin-left: 30px;
    }
    &__title {
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);      
    }
    &__title--main {
      font-size: 88px;
      color: $color-green;

      span {
        color: $color-black;
      }
    }
    &__title--sub {
      margin-top: -5px;
      margin-left: 5px;
      font-size: 20px;
      font-weight: 300;
      
    }
    &__buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>


