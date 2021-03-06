<template>
  <div class="register">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 subtitle--text">Registro</p>
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
                        <v-text-field v-model="user.name" :rules="rules.name" label="Nombre real"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="user.username" :rules="rules.username" label="Nombre de usuario"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="user.email" :rules="rules.email" label="Email"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="user.password" :rules="rules.password" :type="showPassword ? 'text': 'password'" :append-icon="showPassword ? 'visibility' : 'visibility_off'" @click:append="showPassword = !showPassword" label="Contraseña"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="user.confirm" :rules="rules.confirm" :type="showPassword ? 'text': 'password'" :append-icon="showPassword ? 'visibility' : 'visibility_off'" @click:append="showPassword = !showPassword" label="Contraseña"></v-text-field>
                      </v-flex>
                      <v-flex xs12 v-if="error != null">
                        <p class="red--text">{{ error }}</p>
                      </v-flex>
                      <v-flex xs12 class="text-xs-center text-md-left" v-if="errorTerms == true">
                        <p class="red--text">Debes aceptar los terminos y condiciones para registrarte</p>
                      </v-flex>
                      <v-flex xs12 class="text-xs-center text-md-left">
                        <v-checkbox v-model="terms" :label="'Acepto los terminos y condiciones'" color="primary"></v-checkbox>
                      </v-flex>
                      <v-flex xs12 class="text-xs-center text-md-right">
                        <v-btn color="primary" @click="terms == true ? submit() : termError()">Registrar</v-btn>
                      </v-flex>
                      <v-flex xs12>
                        <router-link tag="a" to="/login"><a @click="dialog = false">Ingresa</a></router-link>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
                <v-flex xs12 sm5 md4 lg4 class="pa-2">
                  <v-img
                    :src="('/img/register.svg')"
                    :lazy-src="('/img/register.svg')"
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
          <v-card-title class="headline">Registrado exitosamente.</v-card-title>
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
import Axios from 'axios'
import API from '../api'
import { Configuration } from '../config'

@Component({
  data() {
    return {
      terms: false,
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
        confirm: '',
      },
      rules: {
        name: [
          (v: any) => !!v || 'El nombre de usuario es obligatorio',
          (v: any) => v.toString().length >= 3 || 'El usuario debe contener al menos 3 caracteres',
        ],
        username: [
          (v: any) => !!v || 'El nombre de usuario es obligatorio',
          (v: any) => v.toString().length >= 3 || 'El usuario debe contener al menos 3 caracteres',
          (v: any) => (v || '').indexOf(' ') < 0 || 'El usuario no debe contener espacios',
          (v: any) => /^[a-z]+$/.test(v) || 'El nombre de usuario no puede contener mayúsculas'
        ],
        email: [
          (v: any) => !!v || 'El email es requerido',
          (v: any) => /^.+@.+\..+/gi.test(v) || 'El email tiene que ser válido'
        ],
        password: [
          (v: any) => !!v || 'Contraseña es requerida',
          (v: any) => v.toString().length >= 6 || 'La contraseña debe contener al menos 6 caracteres'
        ],
        confirm: [
          (v: any) => !!v || 'Contraseña es requerida',
          (v: any) => v.toString().length >= 6 || 'La contraseña debe contener al menos 6 caracteres'
        ],
      },
      dialog: false,
      error: null,
      errorTerms: false,
      showPassword: false,
    }
  },
  methods: {
    termError() {
      this.$data.errorTerms = true
      setTimeout(() => {
        this.$data.errorTerms = false
      }, 2500)
    },
    async submit() {
      // @ts-ignore
      if (this.$refs.form.validate()) {
        this.$data.error = null
        API.users.register(this.$data.user.name, this.$data.user.username, this.$data.user.email, this.$data.user.password, this.$data.user.confirm).then( (data: any) => {
          this.$data.dialog = true
          setTimeout(() => {
            this.$router.push({
              path: '/login'
            })
          }, 1500 )
        }).catch( (error: any) => {
          this.$data.error = "Error en el servidor"
        })
      }
    }
  }
})
export default class Register extends Vue {}
</script>
