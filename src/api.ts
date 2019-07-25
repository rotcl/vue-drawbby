import Axios, { AxiosResponse } from 'axios'
import store from '@/store'
import { Configuration } from '@/config'

Axios.defaults.headers['Content-Type'] = 'application/json'

export const ErrorHandler = (res: AxiosResponse, data: any) => {
  return data
}

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
          token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
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
    find(token: String) {
      return new Promise((resolve, reject) => {
        Axios.get(`${Configuration.api.base}/user/${token}`, {
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(error)
        })
      })
    },
  },
  ideas: {
    new(name: String, username: String) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/idea/new`, {
          name: name,
          username: username,
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    },
    all() {
      return new Promise((resolve, reject) => {
        Axios.get(`${Configuration.api.base}/idea/all`, {
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    }
  },
  suggests: {
    new(name: String, username: String) {
      return new Promise((resolve, reject) => {
        Axios.post(`${Configuration.api.base}/suggest/new`, {
          name: name,
          username: username,
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    },
    all() {
      return new Promise((resolve, reject) => {
        Axios.get(`${Configuration.api.base}/suggest/all`, {
        }).then( res => {
          resolve(res.data)
        }).catch( error => {
          reject(null)
        })
      })
    }
  }
}