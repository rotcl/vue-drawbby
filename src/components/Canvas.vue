<template>
  <div class="canvas" ref="ref">
    <PixelCanvas/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import PixelCanvas from '@/components/PixelCanvas.vue'

  @Component({
    components: {
      PixelCanvas,
    }
  })
  export default class Canvas extends Vue {}
</script>

<style>

</style>