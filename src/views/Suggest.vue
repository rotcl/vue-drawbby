<template>
  <div class="suggest">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Sugerir idea</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 my-0">
              <v-layout wrap align-start justify-start row fill-height class="my-0">
                <v-flex xs12 sm5 md4 lg4 class="pa-2">
                  <v-form ref="form">
                    <v-layout wrap row pa-3>
                      <v-flex xs12>
                        <v-text-field v-model="idea" :rules="rules.idea" label="Idea a sugerir"></v-text-field>
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
                <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                  <p class="p-size-120">Herramienta debug para administración para poder agregar ideas directamente a la lista final que se incluirá semana a semana.</p>
                  <p class="p-size-120 grey--text mt-3">En la sección inferior aparecerán las últimas 8 ideas agregadas.</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="grey lighten-5 py-2 pt-0">
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 my-0">
              <v-layout wrap align-start justify-start row fill-height class="my-0">
                <v-flex xs12 md8 class="pa-2 my-0">
                  <p class="p-size-180 primary--text">Últimas 8 ideas</p>
                  <p class="p-size-110" v-for="i in ideas.suggest" :key="i"> {{ i.name }} - {{ i.date.slice(0, 10) }}</p>
                </v-flex>
                <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                  <v-img
                    :src="('/img/suggest.svg')"
                    :lazy-src="('/img/suggest.svg')"
                    width="70%"
                    style="float:right">
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
          <v-card-title class="headline">Se ha enviado tu sugerencia</v-card-title>
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
import { mapState } from 'vuex'

@Component({
  computed: mapState(['user', 'token']),
  data() {
    return {
      idea: null,
      ideas: [],
      rules: {
        idea: [
          (v: any) => !!v || '¿Y la idea donde está?',
          (v: any) => v.toString().length >= 3 || 'La idea debe contener al menos 3 caracteres',
        ],
      },
      dialog: false,
      error: null,
    }
  },
  methods: {
    async submit() {
      API.suggests.new(this.$data.idea, this.$store.state.user.username).then( (data: any) => {
        this.$data.dialog = true
        setTimeout(() => {
          // @ts-ignore
          this.$router.go()
        }, 1500 )
      }).catch( (error: any) => {
        this.$data.error = "Error en el servidor"
      })
    },
  },
  async beforeMount() {
    this.$data.ideas = await API.suggests.all()
  },
})
export default class Suggest extends Vue {}
</script>
