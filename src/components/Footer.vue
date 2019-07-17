<template>
  <div class="footer">
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <p class="grey--text my-3"><router-link to="/" class="main--text">Drawbby &copy;</router-link> Since {{ new Date().getFullYear() }}</p>
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
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: white;
   text-align: center;
}
</style>
