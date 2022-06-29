<template>
   <div class="py-16 grey lighten-4" xs6> 
    <v-row class="text-center">
      <v-col><h2 class="text-h4 text-sm-h3 font-weight-black mb-4"> 
        <br> <br> Para participar debes estar registrado en el sistema
        </h2>
      </v-col>
    </v-row>
   <v-layout >
    <v-row class="container text-center container--fluid">
      <!-- 1 -->
      <v-col>
        <v-hover v-slot="{ hover }" close-delay="100">
            <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            >
         <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
          <div class="text-center">
            <zoom-on-hover 
              >
            <v-avatar size="200" color="#00CCB1">
              
            <v-icon  dark size="170">

                mdi-chat-processing
            
            </v-icon>
            
            </v-avatar>
            </zoom-on-hover>
          </div>
          <v-card-text class="card">
          <p class="text-h5 text-uppercase font-weight-black mt-6 mb-2" >
            Contactarse directamente con el profesor a cargo
          </p>
          <p class="text--disabled text-uppercase"></p>
        </v-card-text>
       </v-flex >
       </v-card>
        </v-hover>
      </v-col>
       <!-- 2 -->
       <v-col>
        <v-hover v-slot="{ hover }" close-delay="100">
            <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            >
        <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
          <div class="text-center">
            <v-avatar size="200" color="#00CCB1" >
            <v-icon dark size="170">
              mdi-layers
              
            </v-icon>
            </v-avatar>
          </div>
          <v-card-text class="card">
           <p class="text-h5 text-uppercase font-weight-black mt-6 mb-2" >
              Ser estudiante de la Universidad de Talca
          </p>
          <p class="text--disabled text-uppercase"></p>
        </v-card-text>
        </v-flex >
        </v-card>
        </v-hover>
       </v-col>

        <!-- 3 -->
       <v-col>
        <v-hover v-slot="{ hover }" close-delay="100">
            <v-card
              :elevation="hover ? 20 : 10"
              :class="{ 'on-hover': hover }"
            >
            

        <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
          <div class="text-center">
            <v-avatar class="avatar" size="200" color="#00CCB1" >
             <v-icon dark size="170">
              
              mdi-file-document-edit
            </v-icon>
            </v-avatar>
          </div>
          <v-card-text class="card">
           <p class="text-h5 text-uppercase font-weight-black mt-6 mb-2" >
            Participar e inscribirse en las encuestas
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


<style scoped>

.v-container{
  width: 150%;
}
img{
    width:500%;
    max-width:600px;
   
}

.card{
  text-align: center;
}



</style>
