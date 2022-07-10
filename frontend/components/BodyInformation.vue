<template>
  <div>
    <v-container>
        <v-layout>
            <v-row class="py-16">
             </v-row>
            
                <v-col 

                

                    cols="12"
                    md="4"
                >  
                           
              <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>

                    

                    <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>

                    
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>

                   <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>

                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>
                
                <nuxt-link to="/Anuncio">
                       <v-hover v-slot="{ hover }" close-delay="100">
                       <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            > 
            <v-skeleton-loader 
                    v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"
                    light="true"
                    loading="false"
                    tile="true"
                    ></v-skeleton-loader>
             </v-card>
            </v-hover>
           </nuxt-link>
                  
                </v-col>



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
    }),
  
   methods: {
    async getAllPosts(){
      const post = await API.getAllPosts()
      console.log(post.data);
    },
    }, beforeMount() {this.getAllPosts()}
    }
    
    
</script>

<style>



.py-16 {
  
  position: relative;
  margin-inline: 10px;
  margin-top: 20px;
  display: inline-flex;
  color: white;
  text-shadow: white;
  padding: 10px;
  text-decoration: none;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  
  
}

</style>