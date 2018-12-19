<template>
  <div class="header">
    <img class="header__logo" alt="FLP logo" src="../assets/flp-logo.png">
    <h2 class="header__title">H-MAP</h2>
    <div class="login">
      <ul>
        <li><a href="" @click.prevent="logout">Logout</a></li>
      </ul>
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
        this.$router.push({ name: 'home' })
        console.log('logged out')
        this.$store.state.loggedinUser = null
      })
    }
  }
}
</script>

<style lang='scss'>
  .header {
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90px;

    &__logo {
      max-width: 200px;
      margin-left: 40px;
    }
    &__title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>


