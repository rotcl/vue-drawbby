<template>
  <div class="draw">
    




    <v-container>
      <v-layout wrap row my-3 px-3 pt-5 pb-0>
        <h1 class="display-2 font-italic mb-3">Dibuja</h1>
        <p>{{ color }}</p>
      </v-layout>
      <v-layout wrap row>
        <v-flex xs11 md5>
          <div id="art">
            <div class="row" v-for="r in rows" :key="r">
              <div class="pixel" v-for="c in cols" :key="c" @click="handl"></div>
            </div>
          </div>
        </v-flex>
        <v-flex xs1 md7>
          <v-btn color="error" @click="turnRed()">rojo</v-btn>
          <v-btn color="success" @click="turnGreen()">verde</v-btn>
          <v-btn color="warning" @click="turnYellow()">amarillo</v-btn>
          <v-btn color="primary" @click="turnBlue()">azul</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
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
      rows: ['','','','','','','','','','','',''],
      cols: ['','','','','','','','','','','',''],
      red: 'red',
      green: 'green',
      yellow: 'yellow',
      blue: 'blue',
      color: '',
      selectedColor: null,
    }
  },
  methods: {
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
      if (this.$data.color == 'red') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('green')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'green') {
        el.removeClass('blue')
        el.removeClass('yellow')
        el.removeClass('red')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'blue') {
        el.removeClass('red')
        el.removeClass('yellow')
        el.removeClass('green')
        el.addClass(this.$data.color)
      }
      if (this.$data.color == 'yellow') {
        el.removeClass('blue')
        el.removeClass('red')
        el.removeClass('green')
        el.addClass(this.$data.color)
      }
      console.log(event.target)

    }
  }
})


export default class Draw extends Vue {}
</script>

<style>
#art{
  display: table;
  border-spacing: 1px;
  background-color: black;
  border: 0.5px solid black;
}
.pixel {
  display: table-cell;
  background-color: white;
  width: 32px;
  height: 32px;
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
</style>