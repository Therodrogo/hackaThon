<template>
  <v-carousel
    cycle
    show-arrows-on-hover>


    <v-carousel-item
      v-for="(item,i) in posts"
      :key="item"
      :src="item.imageUrl"
    >
    
   <v-row
      class="fill-height"
      justify="center"
      
    >
    <p >{{ item.title }} </p>
        
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
.v-row{
  margin-top: 300px;
}

p{
  position: relative;
  top: 100px;
  font-size: 200%;
  color: aliceblue;
  text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
  color: #fff
}
</style>