<!--https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden-->
<template>
  <v-app id='edit'>
    <v-main>
      <v-container class='fill-height' fluid>
        <v-row align='center' justify='center'>
          <v-col cols='12'>
            <v-container>
              <v-card class='elevation-12'>
                <div class='title-card'>
                  <v-card-text>
                    <div class='text-title'>Editar Usuario</div>
                  </v-card-text>
                </div>
                <v-container fluid>
                  <v-form

                    @submit.prevent
                    ref='form'
                    v-model='valid'
                    lazy-validation
                  >
                    <v-row>
                      <v-col cols='12' md='6'>
                        <v-text-field
                          v-model='name'
                          :rules='nameRules'
                          label='Nombre'
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model='email'
                          :rules='emailRules'
                          label='E-mail'
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model='phoneNumber'
                          :rules='phoneRules'
                          label='Teléfono'
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols='12' md='6'>
                        <v-text-field
                          v-model='career'
                          label='Carrera'
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>

                  <div class='text-right'>
                    <v-btn
                      :disabled='!valid'
                      color='primary'
                      large
                      v-on:click='submit'
                    >
                      Guardar Cambios
                    </v-btn>
                    <v-btn
                      color='secondary'
                      large
                      v-on:click='reset'
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
import Swal from 'sweetalert2';
import API from '~/api';

export default {
  data: () => ({

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
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
      window.location = '/';
    },
    async submit() {
      if (this.$refs.form.validate()) {
        let data = {
          name: this.name,
          mail: this.email,
          career: this.career,
          phone: this.phoneNumber,
        }
        let result = await API.postUser(data)


      }
    },
    async getUser() {
      await API.getUserByID('62b8feb28fa7ebd55f486a8f').then((response) => {
        let userData = response.data[0];
        this.name = userData.name;
        this.email = userData.mail;
        this.career = userData.career;
        this.phoneNumber = userData.phone;
      })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {
      this.getUser();
    },
  },
};
</script>

<style>
.title-card {
  background-color: #00CCB1;
}

.text-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Century Gothic", sans-serif;
}

.swal2-popup {
  font-family: "Century Gothic", sans-serif;
}
</style>
