<template>
  <div class="not-found">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <div class="container" align-center>
          <h1 class="neg title"><span class="bg">Error - 404</span></h1>
          <p>Ha ocurrido un error en la web, para continuar:</p>
          <p>* Vuelve al menú principal.<br />
          * Si crees que el error fue nuestro, envíanos un correo a <a href="mailto:correo@correo.cl">correo@correo.cl</a></p>
          <nav class="nav">
            <router-link to="/"><a class="link">Volver al inicio</a></router-link>
          </nav>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>
