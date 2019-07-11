<template>
  <div class="nav">
    <v-toolbar fixed>
      <router-link to="/"><img alt="Drawbby logo" v-lazy="'/img/drawbby-logo.png'" class="logo"></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat small to="/">Home</v-btn>
        <v-btn flat small to="/about">About</v-btn>
        <v-btn flat primary small to="/login">Login</v-btn>
        <v-btn flat primary small to="/register">Register</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
  })
  export default class Nav extends Vue {}
</script>

<style lang="scss">
.logo {
  max-height: 34px;
}
</style>
