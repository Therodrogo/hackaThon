<template>
  <v-container :style="isShowError ? 'border-radius: 0px;' : 'border: 2px solid #84848d;'">
    
    <v-row >
      <v-col cols="12" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
          max-height="400"
              class="grey darken-4"
          src="https://image.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        ></v-img>
        </v-card>
      </v-col>
      <v-col cols="6"  >
        <v-card :style="isShowError ? 'border-radius: 0px;' : 'border: 1px solid #84848d;'"
          class="pa-2"
          outlined
          tile
          color = "#DAE8FC"
          
        >
          Nombre del evento: hackathon 2022
          <br>
          Direccion del evento: utalca?
          <br>
          Fecha inicio: 
          <br>
          Fecha termino:
          <br>
          Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
          <br>

        <v-row
        >
          
          <v-col >
            <v-btn 
            rounded
            elevation="2"
            color = "#00CCB1"
            >
            Crear Grupo
            </v-btn>
          </v-col>
            
          <v-col cols="6" >
            <v-btn 
            rounded   
            elevation="3"
            color = "#00CCB1"
            >
            Ver lista de Grupos
            </v-btn>

          </v-col>
        </v-row>
           
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card :style="isShowError ? 'border-radius: 0px;' : 'border: 1px solid #84848d;'"
          class="pa-2"
          outlined
          tile
          color = "#DAE8FC"
        >
          Descripcion: 
          <br>
          <p>
          Este evento será el evento del año para los programadores Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Corrupti modi aperiam quaerat vero animi. Recusandae id alias ea necessitatibus odit 
          velit facere quisquam. Non consequatur in suscipit repellendus, illo a! Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Sunt quidem minus totam praesentium, voluptas rerum ducimus et aut veritatis. 
          Minus mollitia nobis odio excepturi. Earum asperiores modi explicabo necessitatibus facere.
          
          </p>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
  .v-card {
    padding:10px;
    text-align:center ;
  }

</style>