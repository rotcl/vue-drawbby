import store from '@/store'

export const admRequired = (to: any, from: any, next: any) => {
  if (store.state.user != null && store.state.token != null && store.state.user.email == 'megaadmin@gmail.com') {
    next()
  } else {
    store.commit('logout')
    next(`/login?return=${to.path}`)
  }
}