<template>
    <div id="app">
        <notifications group="foo"></notifications>
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
    import * as OAuth from './OAuth2';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    let oauth = new OAuth.OAuth2();

    export default {
        name: 'app',
        components: {
            PIMHeader,
            PIMFooter,
        },
        data() {
            oauth.getToken().then((obj) => {
                this.authenticated = obj.access_token != null;
            });
            return{
                authenticated: false
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('profile');
                localStorage.removeItem('expires_in');
                this.$router.replace({ name: "home" });
            }
        }
    }
</script>

<style>
    #app {

    }
</style>
