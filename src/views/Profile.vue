<template>
  <div class="profile">
    <v-container>
      <v-layout wrap row mt-3 px-3 pt-5>
        <h1 class="display-2 font-italic mb-0">Perfil de {{ user.name }}.</h1>
        <div class="text-center">
          <v-badge :color="user.human != 1 ? 'primary' : 'orange'">
            <template v-slot:badge>{{ user.public.levelSystem.level }}</template>
          </v-badge>
        </div>
      </v-layout>
      <v-layout wrap row my-3 px-3>
        <v-flex xs12 md4 text-xs-center>
          <v-progress-linear class="my-0" :color="user.human != 1 ? 'primary' : 'orange'" height="10" value="99" striped></v-progress-linear>
          {{ user.public.levelSystem.experience }} / 10000
        </v-flex>
      </v-layout>
      <div class="card" v-if="user">
        <ul class="list-group">
          <li class="list-group-item">Name: {{ user.name }}</li>
          <li class="list-group-item">Email: {{ user.email }}</li>
          <li class="list-group-item">Username: {{ user.username }}</li>
          <li class="list-group-item">Token privado: {{ user.token }}</li>
          <li class="list-group-item">Dibujos: {{ user.public.draw }}</li>
          <br>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['user', 'token']),
})
export default class Profile extends Vue {}
</script>
