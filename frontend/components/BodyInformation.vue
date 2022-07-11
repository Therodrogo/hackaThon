<template>
  <div>
    <v-container>
        <v-layout>
           
        </v-layout>
  </v-container>
  </div>
</template>

<!-- Script del ciclo temporal para cada -->
<script>

import { onBeforeMount } from 'vue-demi';
import API from '~/api';
 export default {
    data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
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

<style>



</style>