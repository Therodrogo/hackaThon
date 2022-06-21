<template>

  <div>


    <v-carousel :continuous="false" :cycle="cycle" :show-arrows="true" hide-delimiter-background
      
      delimiter-icon="mdi-minus" height="500">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" justify="center">
            <div class="container">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>

export default {
  data() {
    return {
      colors: [
        '#00CCB1',
        '#00CCB1',
        '#CC7C0A',
        '#0a5ecc',
        '#9832a1',
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  }
}
</script>

<style scoped>
.app {
  height: max-content;
}

.container {
  margin: 100px;
  text-align: center;
  font-size: 80px;
}

</style>