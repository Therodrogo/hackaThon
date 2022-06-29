<template>

  <div class="carrouselContainer">
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
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

    items: [
          {
            src: 'https://www.utalca.cl/content/uploads/2022/05/Universidad-de-Talca-2022-05-02T182912.216.png',
            
          },
          {
            src: 'https://www.utalca.cl/content/uploads/2021/07/Universidad-de-Talca-2021-07-09T135736.555.png',
          },
          {
            src: 'https://www.thinkagro.cl/wp-content/uploads/2021/07/edificio-bicentenario-de-noche-min-1-1050x700.jpg',
          },
          {
            src: 'https://admision.utalca.cl/wp-content/uploads/2021/04/Screenshot_2.png',
          },
          {
            src: 'http://campustv.utalca.cl/wp-content/uploads/2022/03/Cortina-CampusTV-Informa_-800x450.jpg',
          },
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
.carrouselContainer {
  height: 500px;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>