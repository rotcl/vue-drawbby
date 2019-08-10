<template>
  <div class="login">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 subtitle--text">Login</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 my-0">
              <v-layout wrap align-start justify-start row fill-height>
                <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                  <v-form ref="form" px-3>
                    <v-layout wrap row pa-3>
                      <v-flex xs12>
                        <v-text-field v-model="users.username" :rules="rules.username" label="Nombre de usuario"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="users.password" :rules="rules.password" :type="showPassword ? 'text': 'password'" :append-icon="showPassword ? 'visibility' : 'visibility_off'" @click:append="showPassword = !showPassword" label="Contraseña" autocomplete="new-password"></v-text-field>
                      </v-flex>
                      <v-flex xs12 v-if="error != null">
                        <p class="red--text">{{ error }}</p>
                      </v-flex>
                      <v-flex xs12 class="text-xs-center text-md-right">
                        <v-btn color="primary" @click="submit()">Ingresar</v-btn>
                      </v-flex>
                      <v-flex xs12>
                        <router-link tag="a" to="/register"><a @click="dialog = false">Crear una cuenta</a></router-link>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
                <v-flex xs12 sm5 md4 lg4 class="pa-2">
                  <v-img
                    :src="('/img/login.svg')"
                    :lazy-src="('/img/login.svg')"
                    width="100%">
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Has ingresado con éxito.</v-card-title>
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
          ></v-progress-linear>
        </v-card>
      </v-dialog>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Axios from 'axios'
import API from '../api'
import { Configuration } from '../config'

@Component({
  computed: mapState(['user', 'token']),
  data() {
    return {
      users: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          (v: any) => !!v || 'El nombre de usuario es obligatorio',
          (v: any) => v.toString().length >= 3 || 'El usuario debe contener al menos 3 caracteres',
          (v: any) => (v || '').indexOf(' ') < 0 || 'El usuario no debe contener espacios',
          (v: any) => /^[a-z]+$/.test(v) || 'El nombre de usuario no puede contener mayúsculas'
        ],
        password: [
          (v: any) => !!v || 'Contraseña es requerida',
          (v: any) => v.toString().length >= 6 || 'La contraseña debe contener al menos 6 caracteres'
        ],
      },
      dialog: false,
      showPassword: false,
      error: null,
    }
  },
  methods: {
    async submit() {
      API.users.login(this.$data.users.username, this.$data.users.password).then( (data: any) => {
        this.$store.commit('setUser', data.user)
        this.$store.commit('setToken', data.token)

        this.$data.dialog = true
        setTimeout(() => {
          this.$router.push({
            path: '/profile'
          })
        }, 1500 )
      }).catch( error => {
        this.$data.error = error.msg
      })
    }
  }
})
export default class Login extends Vue {}
</script>
