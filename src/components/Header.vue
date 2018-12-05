<template>
  <div class="header">
    <img class="header__logo" alt="FLP logo" src="../assets/flp-logo.png">
    <h2 class="header__title">H-MAP</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return [

    ]
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


