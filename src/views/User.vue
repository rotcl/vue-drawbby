<template>
  <div class="user">
    <v-container v-if="privateUser != null">
      <v-layout wrap row my-3 px-3 py-5>
        <v-flex xs12>
          <h1 class="display-2 font-italic mb-3">Perfil de {{ token }}</h1>
        </v-flex>
        <v-flex xs12>
          <p v-for="(item,i) in privateUser.draw" :key="i">
            Dibujo {{ item }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else>
      <v-flex xs12>
          <h1 class="display-2 font-italic mb-3">Esta cuenta no existe</h1>
        </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import API from '../api'

@Component({
  data() {
    return {
      privateUser: null,
    }
  },
  async beforeMount() {
    this.$data.privateUser = await API.users.find(this.$props.token)
  },
})
export default class User extends Vue {
  @Prop() token: any
}
</script>
