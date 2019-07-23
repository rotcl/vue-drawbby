<template>
  <v-toolbar
    app
    color="white"
    height="55px"
    scroll-off-screen
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font"><router-link to="/" style="color: #000">{{ title }}</router-link></span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;" 
        flat
        @click="onClick($event, link)"
      >
        {{ link.text }}
    </v-btn>  
    <v-menu offset-y v-if="user == null">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat v-on="on">Account <v-icon>arrow_drop_down</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-tile to="/login">
          <v-list-tile-title class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat>Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/register">
          <v-list-tile-title class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat>Register</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y v-if="user != null">
      <template v-slot:activator="{ on }">
        <v-btn class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat v-if="user.email == 'megaadmin@gmail.com'" v-on="on">{{ user.username }} 👑<v-icon>arrow_drop_down</v-icon></v-btn>
        <v-btn class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat v-else v-on="on">{{ user.username }} <v-icon>arrow_drop_down</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-tile to="/profile">
          <v-list-tile-title class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat>Profile</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logoutall">
          <v-list-tile-title class="ml-0 google-font hidden-sm-and-down" style="text-transform: capitalize;" flat>Log out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
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
      ...mapGetters(['links'])
    },
    data() {
      return {
        log: false,
        title: "Drawbby",
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
      },
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
  })
  export default class Nav extends Vue {}
</script>

<style lang="scss">
.logo {
  max-height: 34px;
}
.v-menu__content {
  position: fixed !important;
}
</style>
