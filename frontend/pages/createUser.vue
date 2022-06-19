<!--https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden-->
<template>
  <v-app id="register">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                <v-row class="fill-height">
                    <v-col cols="12" md="6" class="primary">
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-6" >
                        <p class="text-center">Crear Usuario</p>
                        <h3 class="text-center mt-5">Ingresa tus datos</h3>
                          <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                          />
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
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            label="Contraseña"
                            prepend-icon="mdi-lock"
                            required
                          ></v-text-field>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn 
                          :disabled="!valid"
                          type="submit"
                          color="primary"
                          large
                          @click="validate"
                        >
                          Registrar
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
 export default {
    data: () => ({
      show: false,
      valid: true,
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
        v =>  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/.test(v) 
        || 'Min. 5 caracteres con al menos una mayúscula, un número y una caracter especial',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>

<style>
  .v-text-field{
    padding-right: 5%
  }
  p{
    font-family: "Century Gothic", sans-serif;
    font-size: 40px;
    font-weight: 900;
    color: #00CCB1;
  }
  h3{
     font-family: "Century Gothic", sans-serif;
  }
</style>