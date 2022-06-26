<template>



  <v-container >


   <v-row >
      <v-col cols="12" >
        <div class="justify-center text-center ">

        
          <v-img
          max-height="400"
              class="grey darken-4"
          src="https://image.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        ></v-img>
        <h1 class="mt-5" >HACKATHON 2022</h1>
        
        </div>
      </v-col>
      

      
      <v-col cols="6">
        <v-card-text>

          <v-row
          color = "#DAE8FC"
          >


          </v-row>
          <br>
          <v-icon>mdi-map-marker</v-icon>  
          Direccion del evento: utalca?
          <br>
          <br>
          <v-icon>mdi-calendar</v-icon>  Fecha inicio:
          <br>
          <br>
          <v-icon>mdi-calendar</v-icon>  Fecha termino:
          <br>
     
          <br>
          <br>
          
          <v-row >
            
          </v-row>
        </v-card-text>
      </v-col>


      <v-col cols="6">
        <v-card-text
          class="pa-2"
          color = "#DAE8FC"
        >
        <h4> Descripcion:</h4>
         
          <subtitle-1 class="">
          Este evento será el evento del año para los programadores Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti modi aperiam quaerat vero animi. Recusandae id alias ea necessitatibus odit
          velit facere quisquam. Non consequatur in suscipit repellendus, illo a! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sunt quidem minus totam praesentium, voluptas rerum ducimus et aut veritatis.
          Minus mollitia nobis odio excepturi. Earum asperiores modi explicabo necessitatibus facere.

          </subtitle-1>

        
        </v-card-text>
      </v-col>
      <v-col class="justify-center text-center">
              <v-btn
              rounded
              elevation="2"
              color = "#00CCB1"
              >
              Crear Grupo
              </v-btn>

            </v-col>

            <v-col class="justify-center text-center ">
              <v-btn
              rounded
              elevation="3"
              color = "#00CCB1"
              >
              Lista de Grupos
              </v-btn>
            </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
  .v-card {
    padding:10px;
    text-align:center ;
  }

</style>
