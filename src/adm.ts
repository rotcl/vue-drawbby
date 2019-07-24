import store from '@/store'

export const admRequired = (to: any, from: any, next: any) => {
  // @ts-ignore
  if (store.state.user != null && store.state.token != null && store.state.user.human == 1) {
    next()
  } else {
    store.commit('logout')
    next(`/login?return=${to.path}`)
  }
}