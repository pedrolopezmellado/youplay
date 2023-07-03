import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        deporte: null
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
    },
    mutations: {
        login(state, user) {
          state.user = user;
        },
        logout(state){
            state.user = null;
        },
        saveSport(state, deporte){
            state.deporte = deporte;
        }
    },
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})