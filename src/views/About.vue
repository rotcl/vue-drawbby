<template>
  <div class="about">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Sobre Drawbby</p>
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
                    :src="('/img/web.svg')"
                    :lazy-src="('/img/web.svg')"
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
                  <p class="p-size-120">Una idea inicialmente pensada por <a class="a-size-100" href="https://github.com/rotcl" target="_blank" rel="noreferrer noopener">Gabriel Vial</a> como proyecto tesis 🖨.<br> Nace de la necesidad de mostrar al mundo una parte de ti, de expresarte como nunca lo has hecho, de ser tu mismo 🤯. </p>
                  <p class="p-size-120 grey--text mt-3">Muchos no lo saben, pero los dibujos suelen hablar de ti mismo más de lo que crees 🌹.<br> Dejemos un poco de lado la dependencia a las redes sociales, y abramos el alma a los demás a través de unos dibujos 🍃. </p>
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
                  <p class="p-size-180 primary--text">Código de conducta</p>
                  <p class="p-size-110">Cuando te unes a nuestros programas, te unes a una comunidad. Y como cualquier comunidad en crecimiento, algunas reglas básicas sobre el comportamiento esperado son buenas para todos. Estas pautas cubren el comportamiento en línea (por ejemplo, listas de correo, canales sociales) y fuera de línea (por ejemplo, reuniones en persona). Las violaciones de este código de conducta pueden hacer que los miembros sean eliminados del programa. Use su mejor criterio y, si desea más claridad o tiene preguntas, no dude en comunicarse.</p>
                </v-flex>
                <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                  <v-img
                    :src="('/img/rules.svg')"
                    :lazy-src="('/img/rules.svg')"
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
      <v-container fluid class="mt-3 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="my-0">
              <p class="p-size-200 subtitle--text mb-0">El equipo de trabajo detrás de Drawbby</p>
              <p class="p-size-110 mt-0 mb-0">A pesar de no haber una empresa grande detrás de la idea, hay mucho cariño y corazón puestos en el proyecto. </p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid >
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0">
              <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
                <v-flex xs6 sm3 md2 lg2 v-for="(item,i) in team" :key="i" class="text-xs-center" style="text-align:center">
                  <div class="text-xs-center ma-1 pa-1 py-5 my-0">
                    <v-avatar size="100">
                      <v-img
                        :src="`/img/team/${item.profile}`"
                        :lazy-src="`/img/team/${item.profile}`">
                        <v-layout
                          slot="placeholder"
                          fill-height
                          align-center
                          justify-center
                          ma-0>
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-layout>
                      </v-img>
                    </v-avatar>
                    <p class="mt-3 mb-0 p-size-130">{{ item.name }}</p>
                    <p class="mt-1 mb-0 p-size-100">{{ item.designation }}</p>
                    <v-btn class="mt-0 mx-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                      <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
                    </v-btn>
                    <v-btn class="mt-0 mx-0" icon v-if="(item.linkedin).length>0" :href="item.linkedin" target="_blank">
                      <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
                    </v-btn>
                    <v-btn class="mt-0 mx-0" icon v-if="(item.github).length>0" :href="item.github" target="_blank">
                      <v-icon small style="color:#6e5494">fab fa-github</v-icon>
                    </v-btn>
                    <v-btn class="mt-0 mx-0" icon v-if="(item.website).length>0" :href="item.website" target="_blank">
                      <v-icon style="color:#333">link</v-icon>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0 mb-5">
              <v-layout wrap align-start justify-start row fill-height class="mt-0 mb-0">
                <v-flex xs12 class="mb-3">
                  <p class="p-size-130">Los beta testers de la comunidad son personas de rubros distintos, para tener miradas completamente distintas e independientes del uso de la plataforma, en pro de crear una comunidad más completa.</p>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12 md3 lg3 v-for="(item, i) in testers" :key="i">
                  <v-list three-line class="pa-2">
                    <template>
                      <v-list-tile :key="item.name" avatar>
                        <v-list-tile-avatar>
                          <img :src="`/img/team/${item.profile}`">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title class="p-size-100" v-html="item.name"></v-list-tile-title>
                          <v-list-tile-sub-title><span class="p-size-100">{{ item.designation }}</span></v-list-tile-sub-title>
                          <v-list-tile-sub-title>
                            <v-btn class="mt-0 mx-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
                            </v-btn>
                            <v-btn class="mt-0 mx-0" icon v-if="(item.linkedin).length>0" :href="item.linkedin" target="_blank">
                              <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
                            </v-btn>
                            <v-btn class="mt-0 mx-0" icon v-if="(item.github).length>0" :href="item.github" target="_blank">
                              <v-icon small style="color:#6e5494">fab fa-github</v-icon>
                            </v-btn>
                            <v-btn class="mt-0 mx-0" icon v-if="(item.website).length>0" :href="item.website" target="_blank">
                              <v-icon style="color:#333">link</v-icon>
                            </v-btn>
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </template>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  data() {
    return {
      showLoader: true,
      showData:false,
      team: [
        {
          "name":"Gabriel Vial",
          "designation":"CEO Drawbby",
          "twitter":"",
          "linkedin":"https://www.linkedin.com/in/gabriel-v",
          "github":"https://github.com/rotcl",
          "profile":"avatar.png",
          "website":"https://personal.sadblog.ml"
        },
      ],
      testers: [
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://www.github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://www.linkedin.com/",
          "github":"https://www.github.com/",
          "profile":"avatar.png",
          "website":""
        },
        {
          "name":"Nombre",
          "designation":"Título",
          "twitter":"https://twitter.com/",
          "linkedin":"https://linkedin.com/",
          "github":"https://github.com/",
          "profile":"avatar.png",
          "website":""
        },
      ]
    }
  }
})
export default class About extends Vue {}
</script>
