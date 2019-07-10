<template>
  <div class="about">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <v-flex xs12 text-xs-center white--text>
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
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class About extends Vue {}
</script>
