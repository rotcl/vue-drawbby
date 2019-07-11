import Axios, { AxiosResponse } from 'axios'
import store from '@/store'
import { Configuration } from '@/config'

export const ErrorHandler = (res: AxiosResponse, data: any) => {
  return data
}

Axios.defaults.headers['Content-Type'] = 'application/json'

export default {
  users: {
    register(name: string, email: string, password: string) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/users/register`, {
          name: name,
          email: email,
          password: password,
        }).then( res => {
          resolve(res.status)
        }).catch( error => {
          reject(null)
        })
      })
    },
    login(email: string, password: string) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/users/login`, {
          email: email,
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
        Axios.get(`${Configuration.api.base}/users/verify`, {
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
        Axios.post(`${Configuration.api.base}/users/logout`, {
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