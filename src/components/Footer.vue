
// <p class="grey--text my-3"><router-link to="/" class="main--text">Drawbby &copy;</router-link> Since {{ new Date().getFullYear() }}</p>
<template>
  <v-footer color="white" height="auto" class="">
    <v-container fluid style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0">
      <v-layout wrap align-center justify-center row fill-height class="my-0 py-0">
        <v-flex xs12 md10 sm10 lg10 class="py-0 my-0">
          <p class="footer-130" >Sígue a Drawbby:
            <span v-for="(item,i) in socialLinks" :key="i">
              <v-tooltip bottom>
                <v-btn flat icon :href="item.link" slot="activator">
                  <v-icon>{{item.icon}}</v-icon>
                </v-btn>
                <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
      <v-layout wrap justify-center row>
        <v-flex xs12 md10 lg10>
          <v-layout wrap align-start justify-start row class="my-2">
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="p-size-140 mb-0"><b>Plataforma</b></p>  
              <div v-for="(item,i) in platform" :key="i" class="mt-1">
                <router-link :to="item.Link">
                  <a class="a-size-110">{{item.LinkName}}</a><br>
                </router-link>
              </div>
            </v-flex>
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="p-size-140 mb-0"><b>Dibuja</b></p>  
              <div v-for="(item,i) in draw" :key="i" class="mt-1">
                <router-link :to="item.Link">
                  <a class="a-size-110">{{item.LinkName}}</a><br>
                </router-link>
              </div>
            </v-flex>
            <v-flex xs12 md3 sm4 lg3 class="py-2" v-if="user != null && user.human == 1">
              <p class="p-size-140 mb-0"><b>Admin menu 👑</b></p>  
              <div v-for="(item,i) in admin" :key="i" class="mt-1">
                <router-link :to="item.Link">
                  <a class="a-size-110">{{item.LinkName}}</a><br>
                </router-link>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap justify-center row class="mb-0">
        <v-flex xs12 md10 lg10>
          <v-divider></v-divider>
           <v-toolbar flat color="white" class="pa-0 mx-0" style="padding:0 !important">
            <v-toolbar-title class="footer-200 pl-0 ml-0 mr-3"><router-link to="/" style="color: #3E4551">{{ title }}</router-link></v-toolbar-title>
            <v-btn
                v-for="(item,i) in last" 
                :key="i"
                :to="item.Link" 
                class="ml-0 footer-110 hidden-sm-and-down"
                flat>
                {{ item.LinkName }}
            </v-btn>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapState } from 'vuex'


  @Component({
    computed: mapState(['user', 'token']),
    data() {
      return {
        title: "Drawbby",
        socialLinks:[
          {
              "name" : "Facebook",
              "link" : "/",
              "icon" : "fab fa-facebook"
          },
          {
              "name" : "Instagram",
              "link" : "/",
              "icon" : "fab fa-instagram"
          },
          {
              "name" : "Twitter",
              "link" : "/",
              "icon" : "fab fa-twitter"
          },
        ],
        platform: [
          {
            "LinkName" : "Acerca de",
            "Link" : "/about"
          },
          {
            "LinkName" : "Reglas",
            "Link" : "/rules"
          },
          {
            "LinkName" : "Contacto",
            "Link" : "/contact"
          },
        ],
        draw: [
          {
            "LinkName" : "Dibujar ahora",
            "Link" : "/draw"
          },
          {
            "LinkName" : "Leaderboards",
            "Link" : "/leaderboard"
          },
          {
            "LinkName" : "Premios semanales",
            "Link" : "/weekly-goals"
          }
        ],
        admin: [
          {
            "LinkName" : "Debug",
            "Link" : "/debug"
          },
          {
            "LinkName" : "Public Admin",
            "Link" : "/user/admin"
          },
          {
            "LinkName" : "Link 9",
            "Link" : "/"
          }
        ],
        last: [
          {
            "LinkName" : "Términos y condiciones",
            "Link" : "/"
          },
          {
            "LinkName" : "Políticas de privacidad",
            "Link" : "/"
          }
        ],
      }
    }
  })
  export default class Footer extends Vue {}
</script>

<style lang="scss">

</style>
