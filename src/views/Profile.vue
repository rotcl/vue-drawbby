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
          <v-flex xs6 sm4 md2 offset-xs-1 offset-md1 text-xs-center>
            <v-progress-linear class="my-0" :color="user.human" height="10" value="99" striped></v-progress-linear>
            <v-tooltip bottom>
              <p class="p-size-110 exp" slot="activator">{{ user.public.levelSystem.experience }} / 10000</p>
              <span>Experiencia</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>


    <v-container>
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
