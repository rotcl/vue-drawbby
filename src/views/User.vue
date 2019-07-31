<template>
  <div class="user">
    <v-content class="pa-0" v-if="privateUser != null && show">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <div class="text-center">
              <v-badge :color="privateUser.user.public.type">
                <template v-slot:badge>
                  <v-tooltip right>
                    <p class="" slot="activator">{{ privateUser.user.public.levelSystem.level }}</p>
                    <span>Nivel</span>
                  </v-tooltip>
                </template>
                <span class="p-size-200 subtitle--text mb-0" >Perfil de {{ ptoken }}</span>
              </v-badge>
            </div>
          </v-flex>
          <v-flex xs12 md10 class="mb-0" v-if="user != null && user.token == ptoken">
            <p class="p-size-110">Esta es tu cuenta pública, usando esta url puedes compartir de forma anónima tus dibujos con el mundo.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 subtitle--text">Dibujos</p>
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
    <v-content class="pa-0" v-if="privateUser == null">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 subtitle--text">Esta cuenta no existe</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>





  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Axios from 'axios'
import API from '../api'

@Component({
  computed: mapState(['user', 'token']),
  data() {
    return {
      privateUser: null,
      show: false,
    }
  },
  async beforeMount() {
    this.$data.privateUser = await API.users.find(this.$props.ptoken)
    this.$data.show = true
  },
})
export default class User extends Vue {
  @Prop() ptoken: any
}
</script>
