import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VuePassword from 'vue-password'
import routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Notifications from 'vue-notification'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store';
import 'swiper/dist/css/swiper.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.component(VuePassword);
const router = new VueRouter({
  routes: routes,
  history: true
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
