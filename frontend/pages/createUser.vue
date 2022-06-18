<!--https://github.com/zakaria-29-dev/Vuejs-Vuetify-Login-Application-Moden-->
<template>
  <v-app id="register">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Crear Usuario</h1>
                        <h4 class="text-center mt-4">Ingresa tus datos</h4>
                        <v-form>
                          <v-text-field
                            label="Nombre"
                            name="Name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />
                           <v-text-field
                            id="phone"
                            label="Celular"
                            name="phone"
                            prepend-icon="mdi-cellphone"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark>Registrar</v-btn>
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
   
  }),
  props: {
  }
};
</script>