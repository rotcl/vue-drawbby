<template>
  <div class="default">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200" style="color:#616161">Dibujar</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="mt-2 mb-0">
        <v-layout wrap row align-center justify-center px-3>
          <v-flex xs12 md8 mb-2>
            <v-btn-toggle v-model="drawMenu" class="transparent" mandatory>
              <v-btn large class="white--text" color="black" @click="turn('#000')" :value="1">
                <v-icon>invert_colors</v-icon>
              </v-btn>
              <v-btn large color="white"  @click="turn('#fff')" :value="2">
                <v-icon>invert_colors</v-icon>
              </v-btn>
              <v-btn large color="warning" @click="turn('#FFC107')" :value="3">
                <v-icon>invert_colors</v-icon>
              </v-btn>
              <v-btn large color="success" @click="turn('#4CAF50')" :value="4">
                <v-icon>invert_colors</v-icon>
              </v-btn>
              <v-btn large color="primary" @click="turn('#518FF5')" :value="5">
                <v-icon>invert_colors</v-icon>
              </v-btn>
              <v-btn large color="error" @click="turn('#FF5252')" :value="6">
                <v-icon>invert_colors</v-icon>
              </v-btn>
            </v-btn-toggle>
            <v-btn-toggle v-model="paintMenu" class="transparent" multiple>
              <v-btn large class="mx-3 mt-2" :value="2" @click="clear"><v-icon class="pr-2">autorenew</v-icon> clear</v-btn>
              <v-btn large class="mt-2" :value="1" @click="download"><v-icon class="pr-2">save</v-icon> save</v-btn>
            </v-btn-toggle>
          </v-flex>
          <v-flex xs12 md8 hidden-md-and-up>
            <Mobile :outputName="'example'"/>
          </v-flex>
          <v-flex xs12 md8 hidden-sm-and-down>
            <Desktop :outputName="'example'"/>
          </v-flex>
        </v-layout>
      </v-container>
      <p>{{ test }}</p>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Mobile from '@/components/CanvasM.vue'
import Desktop from '@/components/CanvasD.vue'
import { EventBus } from '@/main'
import { mapState } from 'vuex'

@Component({
  data() {
    return {
      test: '',
      drawMenu: 1,
      paintMenu: [1, 2],
    }
  },
  beforeMount() {
    this.$store.commit('color', '#000')
  },
  methods: {
    download() {
      var canvas = document.getElementById('canvas')
      // @ts-ignore
      var dataURL = canvas.toDataURL()
      this.$data.test = dataURL
    },
    turn(e: any) {
      this.$store.commit('color', e)
    },
    clear() {
      // @ts-ignore
      this.$router.go()
      
    }
  },
  components: {
    Mobile,
    Desktop,
  }
})
export default class Default extends Vue {}
</script>
