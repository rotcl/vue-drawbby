<template>
  <div class="suggest">
    <v-container>
      <v-layout wrap row my-3 px-3 pt-5 pb-2>
        <h1 class="display-2 mb-3"><span class="font-italic">Ideas </span>💭</h1>
      </v-layout>
      <v-layout wrap row>
        <v-flex xs12 md6>
          <p class="headline">Sugerir idea: </p>
          <v-form ref="form">
            <v-layout wrap row justify-center align-center>
              <v-flex xs12 md8 ma-5 pa-3 class="elevation-3">
                <v-layout wrap row justify-center pa-3>
                  <v-flex xs12>
                    <v-text-field v-model="idea" :rules="rules.idea" label="Potencial idea"></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="error != null">
                    <p class="red--text">{{ error }}</p>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center text-md-right">
                    <v-btn color="primary" @click="submit()">Enviar</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout row wrap>
            <v-flex md3>
              <p class="headline">Sugerido el</p>
              <p class="title font-weight-light ml-2"  v-for="i in ideas.suggest" :key="i">
                {{ i.date.slice(0, 10) }}
              </p>
            </v-flex>
            <v-flex md9>
              <p class="headline">Últimas ideas </p>
              <p class="title font-weight-light ml-3"  v-for="i in ideas.suggest" :key="i">
                {{ i.name }}
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Se ha enviado la idea</v-card-title>
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
