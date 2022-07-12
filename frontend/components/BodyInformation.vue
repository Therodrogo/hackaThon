<template>
<div class="container" >
  <v-layout row wrap>

    <v-flex xs12 sm6>
    <v-card
      v-for="(item, i, index) in posts" v-if="i < total/2"
      :key="item">

      <v-card-text>
        <div></div>
        <p class="text-h4 text--primary">
          {{item.title}}
        </p>
        <p>{{item.date}}</p>
        <div class="text--primary">
          {{item.description}}
        </div>
      </v-card-text>

        <div>
         <img
            :src="item.imageUrl"
            >
        </div>

      <v-card-actions>
        <nuxt-link to='/news'>
        <v-btn
          text
          color= #CC7C0A
          @click="selectPost(item._id) ;reveal = true"
        >
          Leer más
        </v-btn>
        </nuxt-link>
        </v-card-actions>
    </v-card>
    </v-flex>

    <v-flex xs12 sm6>
    <v-card
      v-for="(item, i, index) in posts" v-if="i > total/2"
      :key="item">

      <v-card-text>
        <div></div>
        <p class="text-h4 text--primary">
          {{item.title}}
        </p>
        <p>{{item.date}}</p>
        <div class="text--primary">
          {{item.description}}
        </div>
      </v-card-text>

        <div>
         <img
            :src="item.imageUrl"
            >
        </div>

      <v-card-actions>
        <nuxt-link to='/news'>
        <v-btn
          text
          color= #CC7C0A
          @click="selectPost(item._id) ; reveal = true"
        >
          Leer más
        </v-btn>
        </nuxt-link>
        </v-card-actions>
        


    </v-card>
    </v-flex>

  </v-layout>
</div>
</template>

<!-- Script del ciclo temporal para cada -->
<script>

import { onBeforeMount } from 'vue-demi';
import {newsStore} from "../store/index.js"
import API from '~/api';
 export default {
    data: () => ({
      total: 0,
      posts: {

      }
    }),
  
   methods: {
    async getAllPosts(){
      const post = await API.getAllPosts()
      this.posts = post.data
      console.log(this.posts)
      this.total= this.posts.length
      console.log(this.total)
    },

    selectPost(postID){
      const ns = newsStore()
      ns.setNews(postID)
      console.log(ns.selectNews);
    }


    }, beforeMount() {this.getAllPosts()}
  }
    
    
</script>

<style  scoped>
.container{
  text-align: center;
  padding: 3% 1% 1% 1%;
}
img{
    width:50%;
    max-width:200px;
}
.v-card{
  margin: 20px;
}

</style>