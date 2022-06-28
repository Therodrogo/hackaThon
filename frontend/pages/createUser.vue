<!--https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden-->
<template>
  <v-app id="register">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                <v-row class="fill-height">
                    <v-col cols="12" md="6" class="primary">
                     <img class="logo-utalca" alt="logo-utalca" src="/logo-utalca.png" />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-6" >
                        <p class="text-center">Crear usuario</p>
                        <h3 class="text-center mt-5">Ingresa tus datos</h3>
                          <v-form
                            @submit.prevent
                            ref="form"
                            v-model="valid"
                            lazy-validation>
                          <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            label="Nombre"
                            prepend-icon="mdi-account"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            prepend-icon="mdi-email"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="phoneNumber"
                            :rules="phoneRules"
                            label="Teléfono"
                            prepend-icon="mdi-cellphone"
                            required
                          ></v-text-field>
                          <v-select
                            :items="items"
                            prepend-icon="mdi-account-multiple"
                            v-model="select"
                            label="Rol"
                            required
                          ></v-select>
                          <v-text-field
                            v-model="career"
                            :disabled="isDisabled"
                            :rules="select=='Participante' ? careerRules : []"
                            label="Carrera"
                            prepend-icon="mdi-school"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            v-on:click:append="show = !show"
                            label="Contraseña"
                            prepend-icon="mdi-lock"
                            required
                          ></v-text-field>
                          </v-form>
                      </v-card-text>
                      <div class="text-center">


                        <v-btn
                          to="/loginWindow"
                          color="primary"
                          fab
                          small
                          >

                        <v-icon dark>
                            mdi-arrow-left-bold
                        </v-icon>

                        </v-btn>


                        <v-btn
                          :disabled="!valid"
                          color="primary"
                          large
                          v-on:click="submit">
                          crear usuario
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import axios from 'axios';
  import Swal from 'sweetalert2'
  import API from '~/api';
  export default {
    data: () => ({
      select: 'Participante',
      items: ['Participante', 'Organizador'],
      show: false,
      valid: true,
      career: '',
      careerRules: [
        v => !!v || 'Carrera es requerida',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Nombre es requerido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],
      phoneNumber: '',
      phoneRules: [
        v => !!v || 'Teléfono es requerido',
        v => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v)
        || 'Teléfono debe ser válido, se permite formato +569XXXXXXXX, 569XXXXXXXX, 9XXXXXXXX',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Contraseña es requerida',
        v =>  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*(\W|_)+)(?=.{5,})/.test(v)
        || 'Min. 5 caracteres con al menos una mayúscula, una minúscula, un número y una caracter especial',
      ],
    }),
    computed: {
      isDisabled() {
        this.career=''
        return this.select === 'Organizador';
      },
    },
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      async submit () {
        if(this.$refs.form.validate()){
        let data = { name: this.name,
          password: this.password,
          role: this.select,
          mail: this.email,
          career: this.career,
          phone: this.phoneNumber
        }
        let result = await API.postUser(data)
          if(typeof result === 'undefined'){
            Swal.fire({
              title: "Ha ocurrido un error de conexión",
              icon: "error",
              confirmButtonColor: "#00CCB1",
            });
          }
          else{
            if(result.code == 200){
              Swal.fire({
                title: "¡Excelente!",
                text: "Tu usuario se ha creado correctamente",
                icon: "success",
                confirmButtonColor: "#00CCB1",
              }).then(function() {
                window.location = "/loginWindow";
              });
            }
            else{
              Swal.fire({
                title: "El E-mail o Teléfono ingresado estan duplicados",
                icon: "error",
                confirmButtonColor: "#00CCB1",
              });
            }
          }
        }
      },
    },

    beforeMount() {
      this.submit()
    }
  }
</script>

<style>
  .v-text-field{
    padding-right: 5%
  }
  p{
    font-size: 40px;
    font-weight: 900;
    color: #00CCB1;
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

  .v-main{
    background: linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('/25329.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;

  }
  .swal2-popup{
    font-family: "Century Gothic", sans-serif;

  }
</style>
