<template>
    <v-app style="
    background: #ffffff;">
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <div class="justify-center text-center mb-12 mt-12">
                            Admin
                        </div>
                        <div class="justify-center text-center mb-3">
                            <v-btn @click="createEventMethod" rounded elevation="2" color="#00CCB1">
                                Crear Evento
                            </v-btn>
                        </div>
                        <div class="justify-center text-center mb-3 mt-15">
                            <v-btn @click="createAdminHMethod" rounded elevation="2" color="#00CCB1">
                              Placeholder
                            </v-btn>
                        </div>
                        <div class="justify-center text-center mb-3 mt-15">
                            <v-btn @click="createAnuncio" rounded elevation="2" color="#00CCB1">
                                Crear Anuncio
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col v-if="createEvent" cols="6">
                        <v-container>
                            <v-col sm="20">
                                <v-text-field label="ID" prepend-icon="mdi-key"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Nombre" prepend-icon="mdi-account-circle"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-textarea label="Descripcion" value="" prepend-icon="mdi-comment-text-outline">
                                </v-textarea>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Lugar" prepend-icon="mdi-map-marker-radius"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Fecha de inicio" prepend-icon="mdi-calendar"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Fecha de termino" prepend-icon="mdi-calendar-check"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Limite de integrantes" prepend-icon="mdi-account-multiple">
                                </v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="URL banner" prepend-icon="mdi-file-image"></v-text-field>
                            </v-col>
                            <v-btn rounded elevation="2" color="#00CCB1">
                                Confirmar evento
                            </v-btn>
                        </v-container>
                    </v-col>

                    <v-col v-if="adminholder" cols="6">
                        <v-container>
                            <v-col sm="20">
                                <v-text-field label="Admin" prepend-icon="mdi-key"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Nombre" prepend-icon="mdi-account-circle"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-textarea label="Descripcion" value="" prepend-icon="mdi-comment-text-outline">
                                </v-textarea>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Lugar" prepend-icon="mdi-map-marker-radius"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Fecha de inicio" prepend-icon="mdi-calendar"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Fecha de termino" prepend-icon="mdi-calendar-check"></v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="Limite de integrantes" prepend-icon="mdi-account-multiple">
                                </v-text-field>
                            </v-col>
                            <v-col sm="20">
                                <v-text-field label="URL banner" prepend-icon="mdi-file-image"></v-text-field>
                            </v-col>
                            <v-btn rounded elevation="2" color="#00CCB1">
                                Confirmar evento
                            </v-btn>
                        </v-container>
                    </v-col>

                    <v-col v-if="anuncio" cols="6">
                        <v-container>
                          <createPost/>
                        </v-container>
                    </v-col>

                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { placeholder } from '@babel/types'
import createPost from '../components/createPost'

export default {
    data() {
        return {
            createEvent: false,
            adminholder: false,
            anuncio: false
        }
    },
    methods: {
        createEventMethod(){
            console.log(this.createEvent)
            if(this.createEvent == false){
                this.createEvent = true,
                this.adminholder = false,
                this.anuncio = false
            }
            else if(this.createEvent == true){
                this.createEvent = false,
                this.adminholder = false,
                this.anuncio = false
            }
        },
        createAdminHMethod(){
            if(this.adminholder == false){
                this.adminholder = true,
                this.createEvent = false,
                this.anuncio = false
            }
            else if(this.adminholder == true){
                this.adminholder = false,
                this.createEvent = false,
                this.anuncio = false
            }
        },
        createAnuncio(){
            if(this.anuncio == false){
                this.anuncio = true,
                this.createEvent = false,
                this.adminholder = false
            }
            else if(this.anuncio == true){
                this.anuncio = false,
                this.createEvent = false,
                this.adminholder = false
            }
        }
    },
  components:{
      createPost
  }
}
</script>
