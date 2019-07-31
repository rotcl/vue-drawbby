<template>
  <div class="profile">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <div class="text-center">
              <v-badge :color="user.human">
                <template v-slot:badge>
                  <v-tooltip right>
                    <p class="" slot="activator">{{ user.public.levelSystem.level }}</p>
                    <span>Nivel</span>
                  </v-tooltip>
                </template>
                <span class="p-size-200 subtitle--text mb-0" >Perfil de {{ user.name }}</span>
              </v-badge>
            </div>
          </v-flex>
        </v-layout>
        <v-layout wrap align-start justify-start row fill-height class="my-0">
          <v-flex xs6 sm5 md3 offset-xs-1 offset-md1 text-xs-left>
            <v-progress-linear class="my-0" :color="user.human" height="10" value="99" striped></v-progress-linear>
            <v-tooltip bottom>
              <p class="p-size-110 exp" slot="activator">{{ user.public.levelSystem.experience }} / 10000</p>
              <span>Experiencia</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="mt-2 mb-0" v-if="show">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 subtitle--text">Tus dibujos</p>
            <v-layout wrap row align-center justify-center fill-height class="my-0">
              <v-flex xs6 md3 px-5 mb-4 v-for="(item, i) in privateUser.user.public.draw" :key="i" text-xs-center>
                {{ item }}
                <v-img
                  src="/img/notFound.png"
                  lazy-src="/img/notFound.png">
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Axios from 'axios'
import API from '../api'

@Component({
  computed: mapState(['user', 'token']),
  data() {
    return {
      privateUser: null,
      show: false
    }
  },
  async beforeMount() {
    this.$data.privateUser = await API.users.find(this.$store.state.user.token)
    this.$data.show = true
  },
})
export default class Profile extends Vue {}
</script>
