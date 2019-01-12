<template>
  <div class="header">
    <img class="header__logo" alt="FLP logo" src="../assets/flp-logo.png">
    <div class="header__title">
    <h2 class="header__title--main"><span>H-</span>MAP</h2>
    <p class="header__title--sub">Holistic Money Allocation Profile</p>      
    </div>
    <div class="header__buttons">

      <div v-if="$route.name === 'admin'" class="button--admin">
        <router-link to="/">Map</router-link>
      </div>
      <div v-if="$store.state.loggedinUser && $store.state.loggedinUser.role === 'admin' && $route.name === 'home'" class="button--admin">
        <router-link to="/admin">Admin</router-link>
      </div>
      <div v-if="!$store.state.showLogin" class="logout">
        <a href="" @click.prevent="logout">Log out</a>
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
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
    }
  },
  created() {
  }
}
</script>

<style lang='scss'>
  $color-green-light: #b0c986;
  $color-green: #7ba636;
  $color-green-dark: #577937;
  $color-blue: #b5c7e8;
  $color-white: #fff;
  $color-black: #333333;
  $color-grey: #666;
  $color-grey-light: #999;
  $color-blue-dark: #014584;

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
    .button--admin,
    .logout {
      margin-right: 30px;
      padding: 10px 20px;
      border-radius: 5px; 
      border: 1px solid $color-grey-light;      
      transition: all .3s ease-out;      

      &:hover {
        border: 1px solid $color-green;
        
        a {
          color: $color-green;
        }
      }

      a {
        text-decoration: none;
        // text-transform: uppercase;
        font-size: 13px;
        color: $color-grey;
        transition: all .3s ease-out;
      }
    }
    .button--admin {
      margin-right: 10px;
    }
  }
</style>


