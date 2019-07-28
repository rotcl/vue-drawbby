import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null,
    token: null,
    drawer: false,
    items: [ 
      { text: 'Inicio', to: '/', icon:'home'},
      { text: 'Acerca de', to: '/about', icon: 'toc'},
      { text: 'Leaderboard', to: '/leaderboard', icon: 'rounded_corner'},
      { text: 'Premios', to: '/weekly-goals', icon:'group'},
      { text: 'Contacto', to: '/contact', icon:'local_post_office'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    },
    logout(state) {
      state.user = null
      state.token = null
    },
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
