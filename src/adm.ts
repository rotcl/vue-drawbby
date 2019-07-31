import store from '@/store'

export const admRequired = (to: any, from: any, next: any) => {
  // @ts-ignore
  if (store.state.user != null && store.state.user.human == 'tesseract') {
    next()
  } else {
    store.commit('logout')
    next(`/login?return=${to.path}`)
  }
}