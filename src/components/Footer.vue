
// <p class="grey--text my-3"><router-link to="/" class="main--text">Drawbby &copy;</router-link> Since {{ new Date().getFullYear() }}</p>
<template>
  <v-footer
    color="white"
    height="auto"
    class="hidden-sm-and-down">
    <v-container fluid style="border-color:#e0e0e0;border-width: 1px;border-style: solid;border-bottom: 0">
      <v-layout wrap align-center justify-center row fill-height class="my-0 py-0">
        <v-flex xs12 md10 sm10 lg10 class="py-0 my-0">
          <p class="google-font" style="font-size:130%" >Follow Us:
            <span v-for="(item,i) in socialLinks" :key="i">
              <v-tooltip top>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
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
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Título 1</b></p>  
              <div v-for="(item,i) in menu1" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Título 2</b></p>  
              <div v-for="(item,i) in menu2" :key="i" class="mt-1">
                <a :href="item.Link" class="google-font" target="_blank" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>
            <v-flex xs12 md3 sm4 lg3 class="py-2">
              <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;"><b>Título 3</b></p>  
              <div v-for="(item,i) in menu3" :key="i" class="mt-1">
                <a :href="item.Link" target="_blank" class="google-font" style="color: #3E4551;text-decoration: none;font-size:110%">{{item.LinkName}}</a><br>
              </div>
            </v-flex>
           </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap justify-center row class="mb-0">
        <v-flex xs12 md10 lg10>
          <v-divider></v-divider>
           <v-toolbar flat color="white" class="pa-0 mx-0" style="padding:0 !important" >
              <v-toolbar-title class="google-font pl-0 ml-0 mr-3" style="font-size:200%">{{ title }}</v-toolbar-title>
              <v-btn
                  v-for="(item,i) in menu4" 
                  :key="i"
                  :href="item.Link" target="_blank" 
                  class="ml-0 google-font hidden-sm-and-down"
                  style="text-transform: capitalize;font-size:110%" 
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

  @Component({
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
              "name" : "Google Plus",
              "link" : "/",
              "icon" : "fab fa-google-plus"
          },
          {
              "name" : "Twitter",
              "link" : "/",
              "icon" : "fab fa-twitter"
          },
          {
              "name" : "Meetup",
              "link" : "/",
              "icon" : "fab fa-meetup"
          }
        ],
        menu1: [
          {
            "LinkName" : "Link 1",
            "Link" : "/"
          },
          {
            "LinkName" : "Link 2",
            "Link" : "/"
          }
        ],
        menu2: [
          {
            "LinkName" : "Link 3",
            "Link" : "/"
          },
          {
            "LinkName" : "Link 4",
            "Link" : "/"
          }
        ],
        menu3: [
          {
            "LinkName" : "Link 5",
            "Link" : "/"
          },
          {
            "LinkName" : "Link 6",
            "Link" : "/"
          }
        ],
        menu4: [
          {
            "LinkName" : "Link 7",
            "Link" : "/"
          },
          {
            "LinkName" : "Link 8",
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
