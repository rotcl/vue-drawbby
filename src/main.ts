import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import '@/assets/_main.scss'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueLazyload)

Vue.use(Vuetify, {
  theme: {
    main: '#1DB954',
    back: '#8091ad',
    grey: '#e8e8e8',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
