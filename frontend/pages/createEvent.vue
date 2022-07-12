<template>
    <v-app style="
    background: #ffffff;">
        <v-main>
            <v-container>
                
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="Nombre" v-model="name" prepend-icon="mdi-account-circle"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-textarea label="Descripcion" v-model="description" value="" prepend-icon="mdi-comment-text-outline"></v-textarea>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="Lugar" v-model="location" prepend-icon="mdi-map-marker-radius"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="Fecha de inicio" v-model="dateStart" prepend-icon="mdi-calendar"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="Fecha de termino" v-model="dateFinish" prepend-icon="mdi-calendar-check"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="Limite de integrantes" v-model="groupLimit" prepend-icon="mdi-account-multiple"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="URL banner" v-model="coverUrl" prepend-icon="mdi-file-image"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-text-field label="GoogleMapsUrl" v-model="mapUrl" prepend-icon="mdi-file-image"></v-text-field>
                </v-col>
                <v-btn rounded elevation="2" color="#00CCB1">
                            Confirmar evento
                        </v-btn>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import API from '../api'
import swal from 'sweetalert'
  export default {
    data () {
      return {
        
             
      }
    },methods: {
      
    },
  }
</script>

<style>

</style>