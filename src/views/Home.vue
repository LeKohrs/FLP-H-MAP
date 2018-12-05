<template>
  <div class="home">
    <Hmap />
    <Login />
    <div class="hmap__form-tray">
      <DataForm />  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hmap from '@/components/Hmap.vue'
import Login from '@/components/Login.vue'
import DataForm from '@/components/DataForm.vue'

export default {
  name: 'home',
  components: {
    Hmap,
    Login,
    DataForm
  }
}
</script>
