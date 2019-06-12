<template>
  <div id="app">
      <app-nav></app-nav>
      <router-view class='container'/>
  </div>
</template>
<script>
import appNav from './components/appNav.vue';
export default {
  components:{
    appNav,
  }
}
</script>

<style lang="scss">

</style>
