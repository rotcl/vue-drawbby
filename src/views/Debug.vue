<template>
  <div class="temp">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="display-2 font-italic mb-3">Soy un debug</h1>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Debug extends Vue {}
</script>
