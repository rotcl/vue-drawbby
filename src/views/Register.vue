<template>
  <div class="register">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
       <h1 class="headline font-italic mb-3">Registro</h1>
      </v-layout>
      <v-form ref="form" @keyup.native.enter="ontSubmit">
        <v-layout wrap row justify-center>
          <v-flex xs12 md8 ma-5 class="elevation-3">
            <v-layout wrap row justify-center pa-3>
              <v-flex xs12>
                <v-text-field v-model="user.name" :rules="rules.name" label="Nombre de usuario"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="user.email" :rules="rules.email" label="Email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="user.password" :rules="rules.password" label="Contraseña" type="password" autocomplete="new-password"></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="error != null">
                <p class="red--text">{{ error }}</p>
              </v-flex>
              <v-flex xs12 class="text-xs-center text-md-left" v-if="errorTerms == true">
                <p class="red--text">Debes aceptar los terminos y condiciones para registrarte</p>
              </v-flex>
              <v-flex xs12 md6 class="text-xs-center text-md-left">
                <v-checkbox v-model="terms" :label="'Acepto los terminos y condiciones'" color="primary"></v-checkbox>
              </v-flex>
              <v-flex xs12 md6 class="text-xs-center text-md-right">
                <v-btn color="main" @click="terms == true ? submit() : termError()"></v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-form>
      <v-dialog v-model="dialog" persistent max-width="400">
        <v-card>
          <v-card-title class="headline">Se ha registrado correctamente</v-card-title>
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
import Axios from 'axios'
import API from '../api'
import { Configuration } from '../config'

@Component({
  data() {
    return {
      terms: false,
      user: {
        name: 'testname',
        email: 'test@test.cl',
        password: '123456789',
      },
      rules: {
        name: [
          (v: any) => !!v || 'El nombre de usuario es obligatorio',
          (v: any) => v.toString().length >= 5 || 'El usuario debe contener al menos 5 caracteres'
        ],
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
      error: null,
      errorTerms: false
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
        this.$data.error = []
        API.users.register(this.$data.user.name, this.$data.user.email, this.$data.user.password).then( (res: any) => {
          if (res.status != 200) {
            this.$data.error = 'Los datos ingresados son incorrectos, compruébelos e intente nuevamente.'
            console.log('Error')
          } else {
            this.$data.dialog = true
            setTimeout(() => {
              this.$router.push({
                path: '/'
              })
            }, 2000 )
            console.log('Success')
          }
        }).catch( (error: any) => {
          this.$data.error = 'Error'
          console.log('Error')
        })
      }
    }
  }
})
export default class Register extends Vue {}
</script>
