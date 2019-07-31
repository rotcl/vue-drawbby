<template>
  <div class="not-found">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Página en construcción</p>
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
                    :src="('/img/underConstruct.svg')"
                    :lazy-src="('/img/underConstruct.svg')"
                    width="90%">
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
                  <p class="p-size-120">La url que ingresaste aún no está disponible (pero podríamos estar trabajando en ella). </p>
                  <p class="p-size-120">En cualquier caso, si crees que el problema es nuestro, puedes mandarnos un correo a <a href="mailto:contacto@drawbby.cl">contacto@drawbby.cl</a>. </p>
                  <p class="p-size-120 grey--text mt-3">También puedes seguir navegando / reportar el problema. </p>
                </v-flex>
              </v-layout>
              <v-layout wrap align-center justify-center row fill-height class="my-3">
                <v-flex xs4 md3 px-3>
                  <v-btn block color="primary" @click="$router.go(-1)">Volver atrás</v-btn>
                </v-flex>
                <v-flex xs4 md3 px-3>
                  <v-btn block color="primary" to="/contact">Reportar incidente</v-btn>
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>
