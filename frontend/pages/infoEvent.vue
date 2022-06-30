<template>



  <v-container >


   <v-row >
      <v-col cols="12" >
        <div class="justify-center text-center ">

        
          <v-img
          max-height="400"
              class="grey darken-4"
          :src="Banner"
        ></v-img>
        <h1 class="mt-5" >{{NombreEvento}}</h1>
        
        </div>
      </v-col>
      
      <v-col cols="6"  >
        <v-card-text 
          class="pa-2"
          color = "#DAE8FC"
        >
        <h4> Descripcion:</h4>
         
          <subtitle-1 class="" >
          {{Descripcion}}

          </subtitle-1>

        
        </v-card-text>
      </v-col>
      
      <v-col cols="6" >
        <v-card-text>
          <v-row color="#DAE8FC">
          </v-row>
          <br>
          <br>
          <v-icon>mdi-map-marker</v-icon>  
          {{Ubicacion}}
          
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
                  {{NombreEvento}}
                </v-card-title>

                <v-card-text>
                  <iframe :src= "Maps" width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       
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
          <br>
          <v-icon>mdi-calendar</v-icon> Fecha inicio: {{FecInicio.slice(0,10)}}
          <br>
          <v-icon>mdi-clock</v-icon>  {{FecInicio.slice(11,19)}} 
                
          <br>
          <br>
          <v-icon>mdi-calendar</v-icon> Fecha termino: {{FecTermino.slice(0,10)}}
          <br>
          <v-icon>mdi-clock</v-icon>  {{FecTermino.slice(11,19)}} 
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
              to="/eventGroups"
              >
              Lista de Grupos
              
              </v-btn>
            </v-col>
    </v-row>

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

import {eventStore} from "../store/index.js"

const eventoStore = eventStore()

  export default {
    data () {
      return {
        Descripcion:"",
        Maps:"",
        Banner:"",
        NombreEvento:"",
        Ubicacion:"",
        FecInicio:"",
        FecTermino:"",

        dialog: false,
      }
    }, 
    methods: {
      async getEventByID(){
      try {
        const res = await API.getEventByID(eventoStore.getEventId);

        this.Descripcion=res.data.description
        this.Maps=res.data.mapUrl
        this.Banner=res.data.coverUrl
        this.NombreEvento=res.data.name
        this.Ubicacion=res.data.location
        this.FecInicio=res.data.dateStart
        this.FecTermino=res.data.dateFinish

        const date = new Date(this.FecInicio);

        console.log(res.data)
        console.log(this.Maps)
        console.log(this.FecInicio)
        console.log(this.FecTermino)
        console.log(date.getDay(),date.getMonth(),date.getHours(),date.getFullYear())
        

        
      } catch (error) {
        
      }  
      }

    }, beforeMount() {
      this.getEventByID()

    }

  }

</script>

