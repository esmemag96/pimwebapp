<template>
  <div id="app">
    <PIMHeader/>
    <div id="content">
      <router-view></router-view>
    </div>
    <PIMFooter/>
  </div>
</template>

<script>
import PIMHeader from './components/PIMHeader.vue'
import PIMFooter from './components/PIMFooter.vue'

export default {
  name: 'app',
  components: {
    PIMHeader,
    PIMFooter,
  }
}
</script>

<style>
#app {

}
</style>
