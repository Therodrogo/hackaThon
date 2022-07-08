<template>
    <v-app id="inspire">
        <v-main class="white">
            
            <v-container>
                
        <v-row>
            <v-col
            lg="7"
            md="7"
            sm="7"
            xs="7">
            
                <v-sheet
                left min-height="100%"
                
                rounded="lg"
                color="#00CCB1">
                    
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                Solicitudes pendientes
                            </v-list-item-title >
                            <v-list-item-group mandatory color="#00CCB1">
                                <v-list-item >
                                    <v-btn left min-width="70%">RAUL</v-btn>
                                    <v-btn class=' ml-5 mr-5' color="#00ff00">aceptar</v-btn>
                                    <v-btn color="#ff0000">denegar</v-btn>
                                </v-list-item>
                                <v-list-item >
                                    <v-btn left min-width="70%">PEDRO</v-btn>
                                    <v-btn class=' ml-5 mr-5' color="#00ff00">aceptar</v-btn>
                                    <v-btn color="#ff0000">denegar</v-btn>
                                </v-list-item>
                                
                            </v-list-item-group>
                        </v-list-item-content>
                    </v-list-item>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet
                height="500"
                rounded="lg"
                color="#00CCB1">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title >
                                descripcion
                            </v-list-item-title >
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-sheet>
            </v-col>
        </v-row>
        
            </v-container>
            
        </v-main>
    </v-app>
</template>


<script>
// nota de una reunion : tiene que tener un diseño similar a la de UserGroups  

import API from '~/api'
import Swal from 'sweetalert2';
import {usuarioStore} from "../store/index.js"
import {usuarioActivo} from "../store/index.js"
const userStore = usuarioStore()
const activeStore = usuarioActivo()

  export default {
    data () {
      return {

      }
    },

    methods: {
    }, beforeMount() {
    }

  }



</script>
