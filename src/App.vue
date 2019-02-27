<template>
  <div id="app">
    <PIMHeader :authenticated="authenticated"/>
    <!-- <div id="content">
      <router-view></router-view>
    </div> -->
     <router-view @authenticated="setAuthenticated" />
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
  },
  data() {
      return {
          authenticated: false,
          mockAccount: {
              email: "sofiaymarcelo@gmail.com",
              password: "esmerockea"
          }
      }
  },
  mounted() {
      if(!this.authenticated) {
          this.$router.replace({ name: "home" });
      }
  },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
          this.$router.replace({ name: "home" });
      }
  }
}
</script>

<style>
#app {

}
</style>
