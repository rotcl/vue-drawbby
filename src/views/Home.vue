<template>
  <div class="home">
    <v-content class="pa-0">

      <v-container fluid class="my-4">
        <v-layout wrap row my-3 px-3 py-5>
          <v-flex xs12 text-xs-center>
            <h1 class="display-2 font-italic mb-3">¿Qué es Drawbby?</h1>
            <p class="headline font-weight-light">Drawbby es una plataforma de dibujo en base a incentivos.</p>
            <p class="headline font-weight-light">Solo sé tu mismo, si la gente valora tu dibujo, podrás ganas un <router-link to="/goals">premio de la semana</router-link> e incluso entrar al <router-link to="/leaderboard">leaderboard</router-link> de los usuarios más destacados!</p>
            <p class="headline font-weight-light">Se subirán temáticas de dibujo cada 12 horas, de las cuales podrás participar, cualquier persona podrá verlas y votar por tu idea.</p>
            <p class="headline font-weight-light">Puedes recomendar ideas de dibujo <router-link to="/suggest">directamente acá.</router-link></p>
            <p class="headline font-weight-light">Si presencias cualquier conducta que inclumpa las <router-link to="/rules">reglas</router-link>, puedes <router-link to="/report">reportarlas acá.</router-link></p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>
