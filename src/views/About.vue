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
                  <p class="p-size-120">Una idea inicialmente pensada por <a href="https://github.com/rotcl" target="_blank" rel="noreferrer noopener">Gabriel Vial</a> como proyecto tesis 🖨.<br> Nace de la necesidad de mostrar al mundo una parte de ti, de expresarte como nunca lo has hecho, de ser tu mismo 🤯. </p>
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
    </v-content>

    <!-- <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <v-flex xs12 text-xs-center>
          <h1 class="display-2 font-italic mb-3">Drawbby ✍</h1>
          <p class="headline font-weight-light">Una idea inicialmente pensada por <a href="https://github.com/rotcl" target="_blank" rel="noreferrer noopener">Gabriel Vial</a> como proyecto tesis. 🖨</p>
          <p class="headline font-weight-light">Nace de la necesidad de mostrar al mundo una parte de ti, de expresarte como nunca lo has hecho, de ser tu mismo. 🤯</p>
          <p class="headline font-weight-light">Todos los usuarios son 100% privados, y solo tu puedes compartir el <i>token privado</i> de tu cuenta, para que alguien más pueda observar directamente todos tus dibujos. 🔐</p>
          <p class="headline font-weight-light">Muchos no lo saben, pero los dibujos suelen hablar de ti mismo más de lo que crees. 🌹</p>
          <p class="headline font-weight-light">Según el éxito de esta aplicación, los premios semanales irán creciendo y avanzando constantemente, la idea es crear una comunidad activa que quieran liderar un cambio en la internet. 🎁</p>
          <p class="headline font-weight-light">Dejemos un poco de lado la dependencia a las redes sociales, y abramos el alma a los demás a través de unos dibujos. 🍃</p>
          <p class="headline font-weight-light">Puedes ver todos mis dibujos <router-link to="/">directamente acá</router-link>. 🐬</p>
        </v-flex>
      </v-layout>
    </v-container> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class About extends Vue {}
</script>
