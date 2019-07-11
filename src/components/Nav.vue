<template>
  <div class="nav">
    <v-toolbar fixed>
      <router-link to="/"><img alt="Drawbby logo" v-lazy="'/img/drawbby-logo.png'" class="logo"></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat small to="/">Home</v-btn>
        <v-btn flat small to="/about">About</v-btn>
        <v-menu offset-y v-if="user == null">
          <template v-slot:activator="{ on }">
            <v-btn flat small v-on="on">Account <v-icon>arrow_drop_down</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile to="/login">
              <v-list-tile-title>LOGIN</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/register">
              <v-list-tile-title>REGISTER</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y v-if="user != null">
          <template v-slot:activator="{ on }">
            <v-btn flat small v-on="on">{{ user }} <v-icon>arrow_drop_down</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-tile to="/profile">
              <v-list-tile-title>PROFILE</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logoutall">
              <v-list-tile-title>LOG OUT</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-dialog v-model="log" persistent max-width="400">
        <v-card>
          <v-card-title class="headline">Desconectando</v-card-title>
          <v-progress-linear
              indeterminate
              color="primary"
              class="mb-0"
            ></v-progress-linear>
        </v-card>
      </v-dialog>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'
  import Axios from 'axios'
  import API from '../api'
  import { Configuration } from '../config'
    
  @Component({
    computed: mapState(['user', 'token']),
    data() {
      return {
        log: false
      }
    },
    methods: {
      logoutall() {
        this.$data.log = true
        setTimeout(() => {
          this.$router.push({
            path: '/'
          })
          this.$store.commit("logout")
          this.$data.log = false
        }, 2000)
        
      }
    }
  })
  export default class Nav extends Vue {}
</script>

<style lang="scss">
.logo {
  max-height: 34px;
}
</style>
