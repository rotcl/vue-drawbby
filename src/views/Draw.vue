<template>
  <div class="draw">
    <v-container>
      <v-layout wrap row my-3 px-3 pt-5 pb-0>
        <h1 class="display-2 font-italic mb-3">Dibuja</h1>
        <p>{{ color }}</p>
      </v-layout>
      <v-layout wrap row>
        <v-flex xs11 md5>
          <canvas id="pixelCanvas" :width="width" :height="height"></canvas>
          <!-- <table class="grid"><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr><tr><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td><td id="cell"></td></tr></table> -->
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
      rows: '5',
      cols: '5',
      red: '#ff0000',
      green: '#00ff00',
      yelow: '#ffff00',
      blue: '#0000ff',
      color: '#ffffff'
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
    }
  }
})


export default class Draw extends Vue {}
</script>

<style>
canvas { border: 2px solid black;}
.grid {
    margin:1em auto;
    border-collapse:collapse
}
.grid td {
    cursor:pointer;
    width:30px;
    height:30px;
    border:1px solid #ccc;
    text-align:center;
    font-family:sans-serif;
    font-size:9px;
}
.grid td.clicked {
    background-color:black;
    font-weight:bold;
    color:white;
}

canvas{
    border: 1px solid black;
}

</style>