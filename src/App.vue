<template>
    <div id="app">
        <notifications group="foo"></notifications>
        <PIMHeader :authenticated="authenticated" id="header"/>
        <!-- <div id="content">
          <router-view></router-view>
        </div> -->
        <router-view @authenticated="setAuthenticated" id="body" />
        <PIMFooter id="footer"/>
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
    html,
    body {
        margin:0;
        padding:0;
        min-height: 100vh;
    }
    #app {
        min-height:100vh;
        position:relative;
    }
    #body {
        padding-bottom: 60px;
    }
    #footer {
        position:absolute;
        bottom:0;
        width:100%;
        height:100px;   /* Height of the footer */
    }
    .sk-cube-grid {
        width: 200px;
        height: 200px;
        margin: 100px auto;
    }

    .sk-cube-grid .sk-cube {
        width: 33%;
        height: 33%;
        background-color: #333;
        float: left;
        -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    .sk-cube-grid .sk-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s; }
    .sk-cube-grid .sk-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .sk-cube-grid .sk-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .sk-cube-grid .sk-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s; }
    .sk-cube-grid .sk-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .sk-cube-grid .sk-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }

    @-webkit-keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
    }

    @keyframes sk-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
              -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
          }
    }
</style>
