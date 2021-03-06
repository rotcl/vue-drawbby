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
// @ts-ignore
import VueMultianalytics from 'vue-multianalytics'
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.use(VueLazyload)
let gaConfig = {
  appName: 'Drawbby', 
  appVersion: '0.1', 
  trackingId: 'UA-145276594-1', 
  globalDimensions: [],
  globalMetrics: [],
}
Vue.use(VueMultianalytics, {
  modules: {
    ga: gaConfig,
  },
  routing: {
    vueRouter: router
  }
})
Vue.use(Vuetify, {
  theme: {
    hashtag: '#525252',
    subtitle: '#616161',
    primtitle: '#0277bd',
    tesseract: '#FFC107',
    community: '#689F38',
    normal: '#518FF5',
    primary: '#518FF5',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    facebook: '#3b5998',
    instagram: '#8a3ab9',
    twitter: '#1da1f2',
    black: '#000',
    white: '#fff',
  },
  iconfont: 'md',
})

export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
