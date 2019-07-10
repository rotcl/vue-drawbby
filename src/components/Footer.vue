<template>
  <div class="footer">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <p class="grey--text my-3"><router-link to="/" class="main--text">Drawbby </router-link>&copy; {{ new Date().getFullYear() }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
  })
  export default class Footer extends Vue {}
</script>

<style lang="scss">
a {
  text-decoration: none !important;
  color: #4B3E58 !important;
  font-weight: 500 !important;
}
.footer {
  background-color: white;
}
</style>
