<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-flex xs12 class="pl-3 pt-5 grey lighten-5 pb-2">
      <router-link to="/" style="color: #000">
      <v-img
            :src="require('@/assets/logo.png')"
            :lazy-src="require('@/assets/logo.png')"
            width="10vh">
            <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
      </v-img>
      <p class="google-font mt-2" style="font-size:130%">{{ title }}</p>
      </router-link>
      
    </v-flex>
    <v-list>
      <!-- TODO: AGREGAR LOGIN/ REGISTER 
       TODO: AGREGAR USUARIO TAMBIÉN -->
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
        class="google-font"
      >
        <v-list-tile-action>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="link.text" />
        </v-list-tile-content>
        
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import Axios from 'axios'
  import API from '../api'
  import { Configuration } from '../config'

  @Component({
    computed: {
      ...mapState(['user', 'token']),
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.state.setDrawer(val)
        }
      }
    },
    data() {
      return {
        title: "Drawbby",
      }
    },
    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.$store.state.setDrawer(false)
          return
        }
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
        this.$store.state.setDrawer(false)
      }
    }
  })
  export default class Drawer extends Vue {}
</script>

<style>

</style>