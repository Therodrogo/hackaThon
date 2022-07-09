<template>
    <v-app style="
    background: #ffffff;">
        <v-main>
            <template>

                <v-app id="inspire">
                    <v-main class="white">
                        <v-container>
                            <br>

                            <v-row>
                                <v-col lg="4" md="4" sm="6" xs="12">
                                    <v-sheet rounded="lg">
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        Menu De Admin
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-divider class="my-2"></v-divider>

                                            <v-list-item-group v-model="model" mandatory color="#00CCB1">
                                                <v-list-item>
                                                    <v-btn @click="createEventMethod" text min-width="100%" mx-auto>
                                                        Crear Evento
                                                    </v-btn>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-btn @click="createAnuncio" text min-width="100%" mx-auto>
                                                        Crear Anuncio
                                                    </v-btn>
                                                </v-list-item>

                                            </v-list-item-group>
                                            <v-divider class="my-2"></v-divider>
                                        </v-list>
                                    </v-sheet>
                                </v-col>
                                <v-col>
                                    <v-col v-if="createEvent" >
                                        <v-container>
                                            <v-col sm="20">
                                                <v-text-field name="id" label="ID" prepend-icon="mdi-key"></v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="nombre" label="Nombre" prepend-icon="mdi-account-circle">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-textarea name="descripcion" label="Descripcion" value=""
                                                    prepend-icon="mdi-comment-text-outline">
                                                </v-textarea>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="lugar" label="Lugar" prepend-icon="mdi-map-marker-radius">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="fechainicio"  label="Fecha de inicio" prepend-icon="mdi-calendar">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="fechatermino" label="Fecha de termino"
                                                    prepend-icon="mdi-calendar-check"></v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="limitedeintegrantes" label="Limite de integrantes"
                                                    prepend-icon="mdi-account-multiple">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field name="urlbanner" label="URL banner" prepend-icon="mdi-file-image">
                                                </v-text-field>
                                            </v-col>
                                            <v-btn rounded elevation="2" color="#00CCB1">
                                                Publicar Evento
                                            </v-btn>
                                        </v-container>
                                    </v-col>

                                    <v-col v-if="adminholder">
                                        <v-container>
                                            <v-col sm="20">
                                                <v-text-field label="Admin" prepend-icon="mdi-key"></v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="Nombre" prepend-icon="mdi-account-circle">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-textarea label="Descripcion" value=""
                                                    prepend-icon="mdi-comment-text-outline">
                                                </v-textarea>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="Lugar" prepend-icon="mdi-map-marker-radius">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="Fecha de inicio" prepend-icon="mdi-calendar">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="Fecha de termino"
                                                    prepend-icon="mdi-calendar-check"></v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="Limite de integrantes"
                                                    prepend-icon="mdi-account-multiple">
                                                </v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field label="URL banner" prepend-icon="mdi-file-image">
                                                </v-text-field>
                                            </v-col>
                                            <v-btn rounded elevation="2" color="#00CCB1">
                                                Publicar Anuncio
                                            </v-btn>
                                        </v-container>
                                    </v-col>

                                    <v-col v-if="anuncio">
                                        <v-container>
                                            <createPost />
                                        </v-container>
                                    </v-col>
                                </v-col>
                            </v-row>
                            <v-snackbar v-model="snackbar">
                                {{ text }}

                                <template v-slot:action="{ attrs }">
                                    <v-btn color="#00CCB1" text v-bind="attrs" @click="snackbar = false">
                                        Cerrar
                                    </v-btn>
                                </template>
                            </v-snackbar>
                        </v-container>
                    </v-main>
                </v-app>
            </template>



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
        createEventMethod() {
            console.log(this.createEvent)
            if (this.createEvent == false) {
                this.createEvent = true,
                    this.adminholder = false,
                    this.anuncio = false
            }
            else if (this.createEvent == true) {
                this.createEvent = false,
                    this.adminholder = false,
                    this.anuncio = false
            }
        },
        createAdminHMethod() {
            if (this.adminholder == false) {
                this.adminholder = true,
                    this.createEvent = false,
                    this.anuncio = false
            }
            else if (this.adminholder == true) {
                this.adminholder = false,
                    this.createEvent = false,
                    this.anuncio = false
            }
        },
        createAnuncio() {
            if (this.anuncio == false) {
                this.anuncio = true,
                    this.createEvent = false,
                    this.adminholder = false
            }
            else if (this.anuncio == true) {
                this.anuncio = false,
                    this.createEvent = false,
                    this.adminholder = false
            }
        }
    },
    components: {
        createPost
    }
}
</script>
