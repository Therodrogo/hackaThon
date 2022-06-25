<!--https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden-->
<template>
    <v-app id="edit">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="8">
                        <v-container>
                            <v-card class="elevation-12">
                              <v-card-title class="text-h6 font-weight-regular justify-space-between">
                              Editar Usuario
                                </v-card-title>
                                <v-container>
                                    <v-form
                                        @submit.prevent
                                        ref="form"
                                        v-model="valid"
                                        lazy-validation
                                    >
                                        <v-row class="fill-height">
                                            <v-col cols="12" md="6">
                                                <v-text-field
                                                v-model="name"
                                                :rules="nameRules"
                                                label="Nombre"
                                                required
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="email"
                                                :rules="emailRules"
                                                label="E-mail"
                                                required
                                            ></v-text-field>
                                            <v-text-field
                                                v-model="phoneNumber"
                                                :rules="phoneRules"
                                                label="Teléfono"
                                                required
                                            ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field
                                                v-model="career"
                                                label="Carrera"
                                                required
                                            ></v-text-field>
                                            <v-select
                                                :items="items"
                                                v-model="select"
                                                label="Rol"
                                                required
                                            ></v-select>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                        
                                <!--<v-text-field
                                    v-model="password"
                                    :rules="passwordRules"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    v-on:click:append="show = !show"
                                    label="Contraseña"
                                    prepend-icon="mdi-lock"
                                    required
                                ></v-text-field>-->
                            
                
                            <div class="text-right">
                                <v-btn
                                :disabled="!valid"
                                color="primary"
                                large
                                v-on:click="submit"
                                >
                                Guardar Cambios
                                </v-btn>
                                <v-btn
                                color="secondary"
                                large
                                v-on:click=""
                                >
                                Cancelar
                                </v-btn>
                            </div>
                            </v-container>
                            </v-card>
                        </v-container>
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import swal from 'sweetalert'
    export default {
    data: () => ({
        select: 'Participante',
        items: ['Participante', 'Organizador'],
        show: false,
        valid: true,
        career: '',
        name: '',
        nameRules: [
        v => !!v || 'Nombre es requerido',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail es requerido',
            v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
        ],
        phoneNumber: '',
        phoneRules: [
            v => !!v || 'Teléfono es requerido',
            v => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v) || 'Teléfono debe ser valido',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Contraseña es requerida',
            v =>  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*(\W|_)+)(?=.{5,})/.test(v)
            || 'Min. 5 caracteres con al menos una mayúscula, una minúscula, un número y una caracter especial',
        ],
        }),
    methods: {
        reset () {
            this.$refs.form.reset()
        },
        submit () {
            if(this.$refs.form.validate()){
            let data = { name: this.name,
                            password: this.password,
                            role: 'Participant',
                            mail: this.email,
                            career: this.career,
                            phone: this.phoneNumber
                        }
                axios.post('https://server-dot-hackathon-construccionu3.rj.r.appspot.com/user/postUser', data)
                .then(function (response) {
                swal({
                    title: "¡Excelente!",
                    text: "Tu usuario se ha creado correctamente",
                    icon: "success",
                    })
                console.log(response);

                })
                .catch(function (error) {
                swal({
                    title: "Ha ocurrido un error",
                    icon: "error",
                    });
                console.log(error);
                });
            }
        },
        },
    }
</script>

<style>
  p{
    font-family: "Century Gothic", sans-serif;
    font-size: 40px;
    font-weight: 900;
    color: #00CCB1;
  }
  h3{
     font-family: "Century Gothic", sans-serif;
  }
  .logo-utalca{
    width: 25%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

  }

  .swal-title {
    font-family: "Century Gothic", sans-serif;
    color: black;
  }
  .swal-text {
    font-family: "Century Gothic", sans-serif;
    color: black;
  }
  .swal-button {
    font-family: "Century Gothic", sans-serif;
    background-color: #00CCB1;
    border: 1px solid #00CCB1;
  }

</style>
