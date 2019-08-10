<template>
  <div class="draw">
    <v-content class="pa-0">
      <v-container fluid class="mt-2 mb-0 pb-0">
        <v-layout wrap align-center justify-center row fill-height class="my-0">
          <v-flex xs12 md10 class="mb-0">
            <p class="p-size-200 mb-1" style="color:#616161">Dibuja [1/2]</p>
            <p class="p-size-200">[gato]</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid class="my-0">
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs12 md10>
            <v-container class="pa-0">
              <v-layout wrap align-center justify-center row fill-height>
                <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-3">
                  <v-layout wrap row>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="black" :class="color == 'black' ? 'selectedI' : ''" @click="turnBlack()"></v-btn>
                    </v-flex>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="white" :class="color == 'white' ? 'selected' : ''" @click="turnWhite()"></v-btn>
                    </v-flex>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="error" :class="color == 'red' ? 'selected' : ''" @click="turnRed()"></v-btn>
                    </v-flex>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="success" :class="color == 'green' ? 'selected' : ''" @click="turnGreen()"></v-btn>
                    </v-flex>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="warning" :class="color == 'yellow' ? 'selected' : ''" @click="turnYellow()"></v-btn>
                    </v-flex>
                    <v-flex xs6 md12 px-1>
                      <v-btn block color="primary" :class="color == 'blue' ? 'selected' : ''" @click="turnBlue()"></v-btn>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm7 md8 lg8 xl8>
                  <div ref="draw" id="art">
                    <div class="row" v-for="{r, index} in rows" :key="index">
                      <div class="pixel" v-for="{c, index} in cols" :key="index" @contextmenu.prevent @mousedown="handl"></div>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tsdom from 'tsdom'

@Component({
  data() {
    return {
      height: '400',
      width: '400',
      rows: ['','','','','','','','','',''],
      cols: ['','','','','','','','','',''],
      black: 'black',
      white: 'white',
      red: 'red',
      green: 'green',
      yellow: 'yellow',
      blue: 'blue',
      color: '',
      selectedColor: null,
    }
  },
  methods: {
    turnBlack() {
      this.$data.color = this.$data.black
    },
    turnWhite() {
      this.$data.color = this.$data.white
    },
    turnRed() {
      this.$data.color = this.$data.red
    },
    turnGreen() {
      this.$data.color = this.$data.green
    },
    turnYellow() {
      this.$data.color = this.$data.yellow
    },
    turnBlue() {
      this.$data.color = this.$data.blue
    },
    handl(event){
      let el = tsdom(event.target)
      console.log(this.$data.color)
      if (this.$data.color == 'white') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('green')
        el.removeClass('red')
        el.removeClass('black')
      }
      if (this.$data.color == 'black') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('green')
        el.removeClass('red')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'red') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('green')
        el.removeClass('black')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'green') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('red')
        el.removeClass('black')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'blue') {
        el.removeClass('red')
        el.removeClass('yellow')
        el.removeClass('green')
        el.removeClass('black')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'yellow') {
        el.removeClass('blue')
        el.removeClass('red')
        el.removeClass('green')
        el.removeClass('black')
        el.addClass(this.$data.color)
      }
      console.log(event.target)

    }
  }
})


export default class Draw extends Vue {}
</script>

<style lang="scss">
#art{
  max-width: 100vw;
  display: table;
  border-spacing: 1px;
  background-color: black;
  border: 0.5px solid black;
}
.pixel {
  display: table-cell;
  background-color: white;
  width: 28px;
  height: 28px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.selected {
  border: 3px dashed black !important;
}
.selectedI {
  border: 3px dashed white !important;
}
</style>