<template>
  <div class="home">
    <v-content class="pa-0">
      <v-container fluid class="my-4">
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0">
              <v-layout wrap align-center justify-center row fill-height>
                <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-3">
                  <!-- <v-img
                    :src="require('img\notFound.png')"
                    :lazy-src="require('img\notFound.png')"
                    width="100%">
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img> -->
                  image
                </v-flex>
                <v-flex xs12 sm7 md8 lg8 xl8 class="">
                  <p class="p-size-300 mb-1"><b>Libera tu imaginación con
                    <span style="color: #1a73e8;">un dibujo</span>.</b>
                  </p>
                  <p class="p-size-170 mt-0">Drawbby</p>
                  <p class="p-size-110">Descripción corta</p>
                  <p class="p-size-110 hashtag--text">
                    <span v-for="(item,i) in hashtags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                  </p>
                  <div v-if="user == null">
                    <v-btn to="/register" class="ma-0 btn-prim elevation-1" color="#1a73e8">Registrarse</v-btn>
                    &nbsp;
                    <v-btn to="/login" round color="#1a73e8" outline class="ml-0 btn-seco" dark>Iniciar sesión</v-btn>
                  </div>
                  <div v-if="user != null">
                    <v-btn to="/leaderboard" class="ma-0 btn-prim elevation-1" color="#1a73e8">Leaderboard</v-btn>
                    &nbsp;
                    <v-btn to="/draw" round color="#1a73e8" outline class="ml-0 btn-seco" dark>Dibujar ahora</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid style="background-color:#F9F9F9">
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0">
              <v-layout wrap align-center justify-center row fill-height >
                <v-flex xs12 md3 lg3 class="pa-2">
                  <p class="p-size-170">¿Cómo funciona Drawbby?</p>
                  <p class="p-size-100">Esta es una plataforma de dibujos en base a incentivos, solo deja fluir tu imaginación.</p>
                  <p class="p-size-100">Dibuja y evalúa dibujos de otras personas, puedes ganar maravillosos premios</p>
                  <p class="p-size-100">Está desarrollada completamente usando MEVN stack.</p>
                    <span v-for="(item,i) in stack" :key="i">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                          <a :href="item.link" target="_blank" flat class="ma-0">
                            <img :src="item.image" width="30vh" alt="" srcset="" dark v-on="on">
                          </a> 
                          &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{ item.name }}</span>
                      </v-tooltip>
                    </span>
                    <br><br>
                  </v-flex> 
                  <v-flex xs12 md9 lg9 class="">
                    <v-layout row wrap>
                      <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large class="i-size-300">chat_bubble</v-icon>
                        <p class="p-size-130">Reinventa</p>
                        <p class="p-size-110">Temáticas nuevas cada 12 horas, para mantenerte activo</p>
                      </v-flex>
                      <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large class="i-size-300">grade</v-icon>
                        <p class="p-size-130">Juégatela</p>
                        <p class="p-size-110">Premios semanales y mensuales por la comunidad</p>
                      </v-flex>
                      <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large class="i-size-300">lock</v-icon>
                        <p class="p-size-130">Seguridad</p>
                        <p class="p-size-110">Toda tu información es privada, a menos que quieras compartirla</p>
                      </v-flex>
                      <v-flex xs6 sm6 md3 lg3 class="text-xs-center pa-2">
                        <v-icon large class="i-size-300">build</v-icon>
                        <p class="p-size-130">Semi OpenSource</p>
                        <p class="p-size-110">Drawbby es una idea abierta, así que cualquiera puede contribuir</p>
                      </v-flex>
                    </v-layout>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
// <v-container fluid class="my-4">
//   <v-layout wrap row my-3 px-3 py-5>
//     <v-flex xs12 text-xs-center>
//       <h1 class="display-2 font-italic mb-3">¿Qué es Drawbby?</h1>
//       <p class="headline font-weight-light">Drawbby es una plataforma de dibujo en base a incentivos.</p>
//       <p class="headline font-weight-light">Solo sé tu mismo, si la gente valora tu dibujo, podrás ganas un <router-link to="/goals">premio de la semana</router-link> e incluso entrar al <router-link to="/leaderboard">leaderboard</router-link> de los usuarios más destacados!</p>
//       <p class="headline font-weight-light">Se subirán temáticas de dibujo cada 12 horas, de las cuales podrás participar, cualquier persona podrá verlas y votar por tu idea.</p>
//       <p class="headline font-weight-light">Puedes recomendar ideas de dibujo <router-link to="/suggest">directamente acá.</router-link></p>
//       <p class="headline font-weight-light">Si presencias cualquier conducta que inclumpa las <router-link to="/rules">reglas</router-link>, puedes <router-link to="/report">reportarlas acá.</router-link></p>
//     </v-flex>
//   </v-layout>
// </v-container>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex'

@Component({
  computed: mapState(['user', 'token']),
  data() {
    return {
      hashtags: ['dibuja', 'imagina', 'crea'],
      stack: [
        {
          link: 'https://www.mongodb.com/',
          image: '/img/mongodb.svg',
          name: 'MongoDB',
        },
        {
          link: 'https://expressjs.com/',
          image: '/img/expressjs.svg',
          name: 'Express.js',
        },
        {
          link: 'https://vuejs.org/',
          image: '/img/vuejs.svg',
          name: 'Vue.js',
        },
        {
          link: 'https://nodejs.org/',
          image: '/img/nodejs.svg',
          name: 'Node.js',
        },
      ]
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>
