import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify-scss/main.scss'
import '@/assets/_main.scss'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueLazyload)

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
