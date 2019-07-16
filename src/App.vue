<template>
  <v-app>
    <div id="app">
      <Nav/>
      <v-slide-x-transition mode="out-in">
        <router-view/>
      </v-slide-x-transition>
      <Footer/>
    </div>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'

  @Component({
    components: {
      Nav,
      Footer,
    }
  })
  export default class App extends Vue {}
</script>
