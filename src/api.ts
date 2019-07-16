import Axios, { AxiosResponse } from 'axios'
import store from '@/store'
import { Configuration } from '@/config'

export const ErrorHandler = (res: AxiosResponse, data: any) => {
  return data
}

Axios.defaults.headers['Content-Type'] = 'application/json'

export default {
  users: {
    register(name: string, username: String, email: string, password: string, confirm_password: String) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/user/register`, {
          name: name,
          username: username,
          email: email,
          password: password,
          confirm_password: confirm_password,
        }).then( res => {
          resolve(res.status)
        }).catch( error => {
          reject(null)
        })
      })
    },
    login(username: string, password: string) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/user/login`, {
          username: username,
          password: password,
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    },
    verify() {
      return new Promise((resolve, reject) => {
        Axios.get(`${Configuration.api.base}/user/profile`, {
          headers: {
            Authorization: `Bearer ${store.state.token}`,
          }
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/user/logout`, {
          headers: {
            Authorization: `Bearer ${store.state.token}`,
          }
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    },
    lougoutall(){
      // return
    },
  }
}