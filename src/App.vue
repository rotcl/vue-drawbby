<template>
  <v-app class="white">
    <div id="app">
      <Nav/>
      <Drawer/>
      <v-slide-x-transition mode="out-in">
        <router-view/>
      </v-slide-x-transition>
      <Footer/>
    </div>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Drawer from '@/components/Drawer.vue'
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'


  @Component({
    components: {
      Drawer,
      Nav,
      Footer,
    }
  })
  export default class App extends Vue {}
</script>
