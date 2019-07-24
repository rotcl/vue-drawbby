import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/assets/_main.scss'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueLazyload)

Vue.use(Vuetify, {
  theme: {
    hashtag: '#9e9e9e',
    primary: '#518FF5',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  iconfont: 'md',
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
