import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import store from './store'
import Vuex from 'vuex';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'

import VueCompositionApi from "@vue/composition-api";

import Autocomplete from 'vue2-autocomplete-js';

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'


/* import specific icons */

/* add icons to the library */
library.add(fas)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueCompositionApi);
Vue.use(Vuetify);

Vue.use(Autocomplete);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
