<template>

  <div class="header">
    <v-app-bar dense fixed app height="100">
      <!-- Add this class to show menu icon only on small screen -->
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>
      <v-row>
        <v-col md="1">
          <nuxt-link to="/">

            <img class="logoUtal" src="https://i.ibb.co/3hgwd3t/u-logo.png">

          </nuxt-link>
        </v-col>

        <!-- Add this class to show tabs only on medium screen and above -->
        <v-col md="10" class="d-none d-md-flex columnNavBar">

          <div class="algo"></div>
          <nuxt-link to="/">
            <div class="bar">
              Inicio
            </div>

          </nuxt-link>


          <nuxt-link to="/aboutUs">
            <div class="bar">
              Nosotros
            </div>

          </nuxt-link>


          <nuxt-link to="/ComoParticipar">
            <div class="bar">
              ¿Cómo participar?
            </div>

          </nuxt-link>


          <nuxt-link to="/events">
            <div class="bar">
              Eventos
            </div>
          </nuxt-link>

          <nuxt-link to="/loginWindow">

            <!-- LOGO -->

            <div class="loginText">
              Iniciar Sesion
            </div>

          </nuxt-link>

        </v-col>
        <v-col>
          <!-- BlankSpace -->
        </v-col>
      </v-row>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/">
                <div class="bar">
                  Inicio
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/aboutUs">
                <div class="bar">
                  Nosotros
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to="/ComoParticipar">
                <div class="bar">
                  ¿Cómo participar?
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to="/events">
                <div class="bar">
                  Eventos
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to="/loginWindow">

                <!-- LOGO -->

                <div class="loginText">
                  Iniciar Sesion
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>




<script>
export default {
  data() {
    return {
            drawer: false,

    }
  },
  props: {
    menuEstudiante: Boolean,
    menuAdministrador: Boolean,
    posicionMono: String,
  },
  methods: {
    loginAppear: function () {
      console.log("aa")
    }
  },
}
</script>

<style scoped>


.header{
  position: relative;
  top: 0;
} 

.bar {
  margin-inline: 10px;
  margin-top: 40px;
  display: inline-flex;
  color: black;
  padding: 10px;
  text-decoration: underline ;
  text-decoration-color: white;
  background-image: linear-gradient(#CC7C0A, #CC7C0A);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
}

.loginText {
  position: relative;
  margin-inline: 10px;
  margin-top: 40px;
  display: inline-flex;
  color: black;
  text-shadow: white;
  padding: 10px;
  text-decoration: none;
  background-image: linear-gradient(#CC7C0A, #CC7C0A);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  background-color: #00CCB1;
}
.loginText:hover{
  background-color: #04e4c6;
}

.bar:hover,
.bar:focus {
  background-size: 100% 3px;
}



.logoUtal {
  position: relative;
  height: 80px;

}

.columnNavBar {
  position: relative;
  height: 100px;
  align-content: center;
  justify-content: center;
}
</style>