<template>
   <div class="container" xs6> 

    <v-row class="text-center" >
      <v-col><h2 class="text-h4 text-sm-h3 font-weight-black mb-4"> 
        <br> <br> 
        Anuncio
        </h2>
      </v-col>
    </v-row>
   <v-layout >
    <v-row class="container text-center container--fluid">
      <!-- 1 -->
      <v-col>
        <v-hover v-slot="{ hover }" close-delay="100">
            <v-card
              :elevation="hover ? 10 : 1"
              :class="{ 'on-hover': hover }"
            >
         <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
      
          <div class="text-center">
            Título
            <zoom-on-hover 
              >
            <v-avatar size="400" color="red">
              
            <v-icon  dark size="100">
                Imagen
            </v-icon>
            
            </v-avatar>
            </zoom-on-hover>
            Descripción
          </div>
          <v-card-text class="card">
          <p class="text-h6 text-uppercase font-weight-black mt-6 mb-2" >
          </p>
          <p class="text--disabled text-uppercase"></p>
        </v-card-text>
       </v-flex >
       </v-card>
        </v-hover>
      </v-col>
    </v-row>
   </v-layout>
  </div> 
</template>