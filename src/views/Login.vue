<template>
  <div class="register">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="headline font-italic mb-3">Login</h1>
      </v-layout>
      <v-form ref="form" @keyup.native.enter="ontSubmit">
        <v-layout wrap row justify-center>
          <v-flex xs12 md8 ma-5 pa-3 class="elevation-3">
            <v-layout wrap row justify-center pa-3>
              <v-flex xs12>
                <v-text-field v-model="users.email" :rules="rules.email" label="Email"></v-text-field>
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
        email: '',
        password: '',
      },
      rules: {
        email: [
          (v: any) => !!v || 'El email es requerido',
          (v: any) => /^.+@.+\..+/gi.test(v) || 'El email tiene que ser válido'
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
      API.users.login(this.$data.users.email, this.$data.users.password).then( (data: any) => {
        this.$store.commit('setUser', data.user)
        this.$store.commit('setToken', data.token)

        this.$data.dialog = true
        setTimeout(() => {
          this.$router.push({
            path: '/'
          })
        }, 2000 )
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
