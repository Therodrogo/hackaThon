<template>
  <v-carousel
    cycle
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in posts"
      :key="4"
      :src="item.imageUrl"
    >
        <v-row
          class="fill-height"
          justify="center"
        >
          <div class="text-h2">
            {{ item.title }} 
          </div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>

<script>

import { onBeforeMount } from 'vue-demi';
import API from '~/api';
 export default {
    data: () => ({
      posts: {
      }
    }),
  
   methods: {
    async getAllPosts(){
      const post = await API.getAllPosts()
      this.posts = post.data
      console.log(this.posts)
    },
    }, beforeMount() {this.getAllPosts()}
  }
    
</script>

<style scoped>
.app {
  height: max-content;
}

.container{
  text-align: center;
  padding: 3% 1% 1% 1%;
}
.carrouselContainer {
  height: 500px;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>