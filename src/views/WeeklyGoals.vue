<template>
  <div class="weekly">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="display-2 mb-3"><span class="font-italic">Soy un premio de la semana </span>🏆</h1>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Weekly extends Vue {}
</script>
