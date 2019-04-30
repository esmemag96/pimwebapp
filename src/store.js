import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    server: "http://localhost:8080",
    oauth2: "http://localhost:9000"
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state
})