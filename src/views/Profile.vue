<template>
  <div class="temp">
    <v-container>
      <v-layout wrap row my-3 px-3 py-5>
        <h1 class="display-2 font-italic mb-3">Perfil de {{ user }}</h1>
      </v-layout>
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
