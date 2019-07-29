<template>
  <div class="contact">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Contacto</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 my-0">
              <v-layout wrap align-start justify-start row fill-height class="my-0">
                <v-flex xs12 sm5 md4 lg4 class="pa-2">
                  <v-img
                    :src="('/img/contactMain.svg')"
                    :lazy-src="('/img/contactMain.svg')"
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
                <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                  <p class="p-size-120">Para cualquier problema o necesidad de asistencia, puedes escribir por whatsapp o email en todo momento.</p>
                  <p class="p-size-120 grey--text mt-3">+56 9 3271 9940</p>
                  <p class="p-size-120 grey--text mt-3">gabriel.vial@drawbby.ml</p>
                  <p class="p-size-120">O usar el contacto de la zona inferior.</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 my-0">
              <v-layout wrap align-start justify-start row fill-height class="my-0">
                <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                  <v-form ref="form" px-3>
                    <v-layout wrap row pa-3>
                      <v-flex xs12>
                        <v-text-field v-model="contact.name" :rules="rules.name" label="Nombre"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="contact.email" :rules="rules.email" label="Mail"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea auto-grow v-model="contact.message" :rules="rules.message" label="Mensaje"></v-textarea>
                      </v-flex>
                      <v-flex xs12 v-if="error != null">
                        <p class="red--text">{{ error }}</p>
                      </v-flex>
                      <v-flex xs12 class="text-xs-center text-md-right">
                        <v-btn color="primary" @click="submit()">Enviar</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
                <v-flex xs12 sm5 md4 lg4 class="pa-2" hidden-sm-and-down>
                  <v-img
                    :src="('/img/contactForm.svg')"
                    :lazy-src="('/img/contactForm.svg')"
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
          <v-card-title class="headline">Su mensaje ha sido enviado.</v-card-title>
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
      contact: {
        name: null,
        email: null,
        message: null,
      },
      rules: {
        name: [
          (v: any) => !!v || 'Nombre no puede estar en blanco',
          (v: any) => v.toString().length >= 3 || 'El nombre debe contener al menos 3 caracteres',
        ],
        email: [
          (v: any) => !!v || 'El email es requerido',
          (v: any) => /^.+@.+\..+/gi.test(v) || 'El email tiene que ser válido'
        ],
        message: [
          (v: any) => !!v || '¿Dónde está el mensaje?',
          (v: any) => v.toString().length >= 20 || 'El mensaje debe tener al menos 20 caracteres',
        ],
      },
      dialog: false,
      error: null,
    }
  },
  methods: {
    async submit() {
      // @ts-ignore
      if (this.$refs.form.validate()) {
        this.$data.error = null
        API.contact.new(this.$data.contact.name, this.$data.contact.email, this.$data.contact.message).then( (data: any) => {
          this.$data.dialog = true
          setTimeout(() => {
            this.$router.push({
              path: '/'
            })
          }, 1500 )
        }).catch( (error: any) => {
          this.$data.error = "Error en el servidor"
        })
      }
    }
  }
})
export default class Contact extends Vue {}
</script>
