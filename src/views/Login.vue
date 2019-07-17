<template>
  <div class="register">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="headline font-italic mb-3">Login</h1>
      </v-layout>
      <v-form ref="form">
        <v-layout wrap row justify-center>
          <v-flex xs12 md8 ma-5 pa-3 class="elevation-3">
            <v-layout wrap row justify-center pa-3>
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
                <router-link tag="a" to="/recover"><a @click="dialog = false">¿Olvidaste tu contraseña?</a></router-link> / 
                <router-link tag="a" to="/register"><a @click="dialog = false">Crear una cuenta</a></router-link>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-form>
      <v-dialog v-model="dialog" persistent max-width="400">
        <v-card>
          <v-card-title class="headline">Has ingresado correctamente</v-card-title>
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
          ></v-progress-linear>
        </v-card>
      </v-dialog>
    </v-container>
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
        console.log('Success')
      }).catch( error => {
        console.log(error)
        this.$data.error = 'Datos incorrectos'
      })
    }
  }
})
export default class Login extends Vue {}
</script>
