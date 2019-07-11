import store from '@/store'

export const authRequired = (to: any, from: any, next: any) => {
  if (store.state.user != null && store.state.token != null) {
    next()
  } else {
    store.commit('logout')
    next(`/login?return=${to.path}`)
  }
}