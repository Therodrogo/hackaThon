<template>
  <div>
    <v-container>
        <v-layout>
            <v-row class="py-16">
             </v-row>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                  <div v-for="item in posts">
                  <v-btn>{{item.title}} </v-btn>
                  </div>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="article, actions"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    ></v-skeleton-loader>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
                    ></v-skeleton-loader>

                    <v-skeleton-loader
                    v-bind="attrs"
                    type="list-item-avatar-three-line, image, article"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
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