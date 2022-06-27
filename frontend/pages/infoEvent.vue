<template>



  <v-container >


   <v-row >
      <v-col cols="12" >
        <div class="justify-center text-center ">
          <v-img max-height="400" class="grey darken-4"
            src="https://image.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg">
          </v-img>
          <h1 class="mt-5">HACKATHON 2022</h1>
        </div>
      </v-col>
      
      <v-col cols="6"  >
        <v-card-text 
          class="pa-2"
          color = "#DAE8FC"
        >
        <h4> Descripcion:</h4>
         
          <subtitle-1 class="" >
          Este evento será el evento del año para los programadores Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti modi aperiam quaerat vero animi. Recusandae id alias ea necessitatibus odit
          velit facere quisquam. Non consequatur in suscipit repellendus, illo a! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sunt quidem minus totam praesentium, voluptas rerum ducimus et aut veritatis.
          Minus mollitia nobis odio excepturi. Earum asperiores modi explicabo necessitatibus facere.

          </subtitle-1>

        
        </v-card-text>
      </v-col>
      
      <v-col cols="6" >
        <v-card-text>
          <v-row color="#DAE8FC">
          </v-row>
          <br>

          <v-icon>mdi-map-marker</v-icon>
          Utalca

          <br>
          <v-icon>mdi-map-marker</v-icon>  
          UTALCA
          
            <v-dialog
              v-model="dialog"
              width="700"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ml-3"
                  rounded
                      elevation="2"
                      color = "#00CCB1"
                  
                  v-bind="attrs"
                  v-on="on"
                >
                  MAPS
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  HACKATHON 2022
                </v-card-title>

                <v-card-text>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.1674624592733!2d-71.23159508371475!3d-35.00251288621688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966456519058edeb%3A0x47f5033883ff4b74!2sUniversidad%20de%20Talca!5e0!3m2!1ses-419!2scl!4v1656273669272!5m2!1ses-419!2scl" width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       
                  </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    Aceptar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          
          
          <br>
          <v-icon>mdi-calendar</v-icon> Fecha inicio:
          <br>
          <br>
          <v-icon>mdi-calendar</v-icon> Fecha termino:
          <br>
          <br>
          <br>
          <br>
          
          <v-row >
            
          </v-row>
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
            <v-col class="d-flex justify-center text-center ">
              <v-btn rounded elevation="2" color="#00CCB1" max-width="150px">
                Crear Grupo
              </v-btn>
            </v-col>
            <v-col  class="d-flex justify-center text-center ">
              <v-btn rounded elevation="2" color="#00CCB1" max-width="150px">
                Lista de Grupos
              </v-btn>
            </v-col>
    </v-container>
</template>
<style scoped>
.v-card {
  padding: 10px;
  text-align: center;
}
</style>

<script>
import API from '~/api'
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>