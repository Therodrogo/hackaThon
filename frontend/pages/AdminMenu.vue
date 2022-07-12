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
                                                        MENU ADMINISTRADOR
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
                                                <v-list-item>
                                                    <v-btn @click="createAdminMethod" text min-width="100%" mx-auto>
                                                        Crear Administrador
                                                    </v-btn>
                                                </v-list-item>

                                            </v-list-item-group>
                                            <v-divider class="my-2"></v-divider>
                                        </v-list>
                                    </v-sheet>
                                </v-col>
                                <v-col>
                                    <v-col v-if="createEvent" >
                                        <v-form
                                        ref="form"
                                        v-model="valid"
                                        lazy-validation
                                        >
                                            <v-col sm="20">
                                                <v-text-field 
                                                    label="Nombre" 
                                                    v-model="name" 
                                                    prepend-icon="mdi-account-circle"
                                                    :rules="nameRules"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-textarea 
                                                label="Descripcion" 
                                                v-model="description"  
                                                prepend-icon="mdi-comment-text-outline"
                                                :rules="descriptionRules"
                                                :counter="500"
                                                required
                                                ></v-textarea>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field 
                                                label="Lugar" 
                                                v-model="location" 
                                                prepend-icon="mdi-map-marker-radius"
                                                :rules="locationRules"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                             <v-col sm="20">
                                                <v-dialog
                                                    ref="dialog"
                                                    v-model="modal"
                                                    :return-value.sync="startdate"
                                                    persistent
                                                    width="290px"
                                                    
                                                    
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="startdate"
                                                            label="Fecha de Inicio"
                                                            prepend-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            
                                                        ></v-text-field>
                                                    </template>
                                                        <v-date-picker
                                                        v-model="startdate"
                                                        scrollable
                                                        :min="startdatemin"
                                                        
                                                        >
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                text
                                                                color="primary"
                                                                @click="modal = false"
                                                            >
                                                                Cancel
                                                            </v-btn>
                                                            <v-btn
                                                                text
                                                                color="primary"
                                                                @click="$refs.dialog.save(startdate)"
                                                            >
                                                                OK
                                                            </v-btn>
                                                        </v-date-picker>
                                                </v-dialog>
                                            </v-col>
                                            <v-col sm="20">
                                                <v-dialog
                                                    ref="dialog"
                                                    v-model="modal"
                                                    :return-value.sync="finishdate"
                                                    persistent
                                                    width="290px"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="finishdate"
                                                            label="Fecha de Termino"
                                                            prepend-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            
                                                        ></v-text-field>
                                                    </template>
                                                        <v-date-picker
                                                        v-model="finishdate"
                                                        scrollable
                                                        :min="finishdatemin"
                                                        >
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                text
                                                                color="primary"
                                                                @click="modal = false"
                                                            >
                                                                Cancel
                                                            </v-btn>
                                                            <v-btn
                                                                text
                                                                color="primary"
                                                                @click="$refs.dialog.save(finishdate)"
                                                            >
                                                                OK
                                                            </v-btn>
                                                        </v-date-picker>
                                                </v-dialog>
                                            </v-col>
                                            <v-col sm="20">
                                               
                                                <v-select
                                                    prepend-icon="mdi-account-multiple"
                                                    :items="items"
                                                    v-model="groupLimit"
                                                    label="Máximo de participantes por grupo"
                                                     required
                                                ></v-select>   
                                            </v-col>
                                            <v-col sm="20">
                                                <v-text-field 
                                                label="URL banner" 
                                                v-model="coverUrl" 
                                                prepend-icon="mdi-file-image"
                                                :rules="coverUrlRules"
                                                required
                                                type="text"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col sm="20" >
                                                <v-text-field 
                                                label="GoogleMapsUrl" 
                                                v-model="mapUrl" 
                                                prepend-icon="mdi-google-maps"
                                                :rules="mapUrlRules"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col align="center">
                                                <v-btn 
                                                    @click="validate"
                                                    rounded elevation="2" 
                                                    color="#00CCB1"
                                                    :disabled="!valid"
                                                    >
                                                    Publicar Evento
                                                </v-btn>
                                                <v-btn
                                                    rounded elevation="2"
                                                    color="error"
                                                    class="mr-4"
                                                    @click="reset"
                                                    >
                                                    Reiniciar formulario
                                                </v-btn> 
                                            </v-col>                                                                                    
                                        </v-form>
                                    </v-col>

                                    <v-col v-if="anuncio">
                                        <v-container>
                                            <createPost />
                                        </v-container>
                                    </v-col>

                                    <v-col v-if="createAdmin">
                                        <v-form
                                        ref="form2"
                                        >

                                            <v-col sm="20">
                                                <v-text-field v-model='nameAdmin' :rules='nameAdminRules' label="Nombre Admin" 
                                                    prepend-icon="mdi-account-circle" required></v-text-field>
                                            </v-col>

                                            <v-col sm="20">
                                                <v-text-field v-model='email' :rules='emailRules' label='E-mail'
                                                    prepend-icon='mdi-email' required></v-text-field>
                                            </v-col>

                                            <v-col>
                                                <v-text-field v-model='phoneNumber' :rules='phoneRules' label='Teléfono'
                                                    prepend-icon='mdi-cellphone' required></v-text-field>
                                            </v-col>

                                            <v-col>
                                                <v-text-field v-model='password' :rules='passwordRules' label='Contraseña'
                                                    prepend-icon='mdi-lock' required></v-text-field>
                                            </v-col>

                                            <v-col align="center">
                                                <v-btn 
                                                    rounded elevation="2" 
                                                    color="#00CCB1"
                                                    @click="submit">
                                                    Guardar Admin
                                                </v-btn>
                                            </v-col>
                                            
                                        </v-form>
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
import { placeholder, thisExpression } from '@babel/types'
import createPost from '../components/createPost'
import API from '~/api'
import swal from 'sweetalert'
export default {
    data() {
        return {

            createEvent: true,
            adminholder: false,
            anuncio: false,
            name:"",
            location:"",
            description:'',
            coverUrl:"",
            mapUrl:"",
            nameRules:[
                v => !!v || 'Un nombre de evento es requerido',
            ],
            dateStartRules:[
            
            ],
            dateFinishRules:[],
            locationRules:[
                v => !!v || 'Es necesario ingresar una ubicación ',
            ],
            descriptionRules:[
                v => !!v || 'Una descripcion es requerida',
                v => ( v && v.length>=50 && v.length <= 500) || 'La descripción debe tener como minimo 50 caracteres',
            ],
            groupLimitRules:[
                v => !!v || 'Es necesario ingresar un limite personas por grupo',
            ],
            coverUrlRules:[
                v => !!v || 'Es necesario tener una imagen para el banner del evento',
                v => /.+.png/.test(v) || /.+.jpg/.test(v) || 'La URL debe finalizar en "jpg" o "png"',
            ],
            mapUrlRules:[
                 v => !!v || 'Este campo es necesario para incorporar un mapa de la ubicación del evento',
                  v => /<iframe+.+.iframe>/.test(v) || 'Formato invalido:Ir a google Maps->Buscar lugar->Opcion compartir->Incorporar un mapa->COPIAR HTML->Pegar en este componente',

            ],
            startdate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            finishdate: (new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toISOString().substr(0, 10),
            startdatemin:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            finishdatemin:(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            items: [3,4,5,6],
            groupLimit:3,
            valid:true,
            
            createAdmin: false,
            nameAdmin: '',
            nameAdminRules: [
            v => !!v || 'Un nombre es requerido',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Un E-mail es requerido',
                v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
            ],
            phoneNumber: '',
            phoneRules: [
                v => !!v || 'Un teléfono es requerido',
                v => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v)
                    || 'Teléfono debe ser válido, se permite formato +569XXXXXXXX, 569XXXXXXXX, 9XXXXXXXX',
            ],
            password: '',
            passwordRules: [
            v => !!v || 'Una contraseña es requerida',
            v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*(\W|_)+)(?=.{5,})/.test(v)
                || 'Min. 5 caracteres con al menos una mayúscula, una minúscula, un número y un caracter especial',
            ],
        }
    },
    methods: {
        createEventMethod() {
            console.log(this.createEvent)
            if (this.createEvent == false) {
                this.createEvent = true,
                this.anuncio = false,
                this.createAdmin = false
            }
            else if (this.createEvent == true) {
                this.createEvent = false,
                this.anuncio = false,
                this.createAdmin = false
            }
        },
        createAnuncio() {
            if (this.anuncio == false) {
                this.anuncio = true,
                this.createEvent = false,
                this.createAdmin = false
            }
            else if (this.anuncio == true) {
                this.anuncio = false,
                this.createEvent = false,
                this.createAdmin = false
            }
        },
        createAdminMethod() {
            if (this.createAdmin == false) {
                this.createAdmin = true,
                this.anuncio = false,
                this.createEvent = false
            }
            else if (this.createAdmin == true) {
                this.createAdmin = false,
                this.anuncio = false,
                this.createEvent = false
            }
        },
        async submit() {
            if (this.$refs.form2.validate()) {
                try {
                    let result = await API.postUser(
                    {
                        "name": this.nameAdmin,
                        "password" : this.password,
                        "role" :"Administrador" ,
                        "career": "",
                        "mail": this.email,
                        "phone": this.phoneNumber,
                        "groupsID": [],
                        "eventsID": []
                    }                  
                    );
                    console.log(result);
                    if (typeof result === 'undefined') {
                        swal({
                            title: 'Ha ocurrido un error de conexión',
                            icon: 'error',
                            confirmButtonColor: '#00CCB1',
                        });
                    }
                    else {
                        if (result.code == 200) {
                            swal({
                            title: '¡Excelente!',
                            text: 'Tu usuario se ha creado correctamente',
                            icon: 'success',
                            confirmButtonColor: '#00CCB1',
                            }).then(function() {
                            window.location = '/AdminMenu';
                            });
                        }
                        else {
                            swal({
                            title: 'El E-mail o Teléfono ingresado estan duplicados',
                            icon: 'error',
                            confirmButtonColor: '#00CCB1',
                            });
                        }
                    }
                } catch (error) {
                    console.log(error);
                }               
            }
            else{
                swal({
                    title: 'Los datos ingresados no son validos',
                    icon: 'error',
                    confirmButtonColor: '#00CCB1',
                });
            }
        },
        async validate () {
            if(this.$refs.form.validate()){
                const string = this.mapUrl.split('"')
                try {
                    const res = await API.postEvent(
                        {
                            "name": this.name,
                            "dateStart": this.startdate,
                            "dateFinish": this.finishdate,
                            "location": this.location,
                            "description": this.description,
                            "groupLimit": this.groupLimit,
                            "coverUrl": this.coverUrl,
                            "groupsID": [],
                            "mapUrl":string[1]
                        }
                    )
                    
                    
                    if(res.code == 200){
                        swal({
                        title: "El evento se ha creado exitosamente",
                        icon: "success",
                        })
                    }
                    if(res.code == 400){
                        swal({
                        title: "Ya existe un evento con este nombre",
                        icon: "error",
                        })
                    }
                } catch (error) {
                    console.log(error)
                }
        
            }else{
                swal({
                title: "Es necesario completar todos los campos",
                icon: "error",
        });
            }
        },reset () {
        this.$refs.form.reset()
      }
        },
    components: {
        createPost
    }
}
</script>

