<template>

  <div>
    <v-app-bar dense fixed app height="80">
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

          <nuxt-link v-if="quitarBotones" to="/loginWindow">

            <!-- Login -->

            <div @click="loginEvent()" class="loginText">
              Iniciar Sesión
            </div>

          </nuxt-link>

          <nuxt-link v-if="quitarBotones" to="/createUser">

            <!-- RegisterUser -->

            <div class="registerText">
              Crear Usuario
            </div>

          </nuxt-link>



          <!-- UsuarioActivo -->
          <h1>{{ usuarioActivoComputed }}</h1>



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
                <div class="drawerBar">
                  Inicio
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/aboutUs">
                <div class="drawerBar">
                  Nosotros
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to="/ComoParticipar">
                <div class="drawerBar">
                  ¿Cómo participar?
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to="/events">
                <div class="drawerBar">
                  Eventos
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link  v-if="quitarBotones" to="/loginWindow">


                <div class="loginText">
                  {{ user }}
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link v-if="quitarBotones" to="/createUser">

                <!-- RegisterUser -->

                <div class="registerText">
                  Crear Usuario
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-title>
               <!-- UsuarioActivo -->
                {{ usuarioActivoComputed }}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>




<script>

import { usuarioActivo } from "../store/index.js"

export default {

  data() {
    return {
      drawer: false,
      user: "Iniciar Sesion",
      user2: "Crear Usuario",
 
    }
  },
  computed: {
    //Actualiza el nombre del usuario
      usuarioActivoComputed() {
        const user = usuarioActivo()
        return user.$state.layout;
      },
    //Actualiza los botones al loguearse
      quitarBotones(){
        const user = usuarioActivo()
        return user.$state.noLogueado;
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
    },
    


  }
}
</script>

<style scoped>
.bar {
  margin-inline: 10px;
  margin-top: 20px;
  display: inline-flex;
  color: black;
  padding: 10px;
  text-decoration: underline;
  text-decoration-color: rgb(245, 245, 245);
  background-image: linear-gradient(#CC7C0A, #CC7C0A);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
}

.drawerBar {
  margin-inline: 10px;
  margin-top: 10px;
  display: inline-flex;
  color: black;
  padding: 10px;
  text-decoration: underline;
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
  margin-top: 20px;
  display: inline-flex;
  color: white;
  text-shadow: white;
  padding: 10px;
  text-decoration: none;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  background-color: #00CCB1;
}

.loginText:hover {
  background-color: #04e4c6;
}

.registerText {
  position: relative;
  margin-inline: 10px;
  margin-top: 20px;
  display: inline-flex;
  color: white;
  text-shadow: white;
  text-decoration: none;
  padding: 10px;
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  background-color: #cc7c0a;
  text-decoration: underline;
  text-decoration-color: #cc7c0a;
}

.registerText:hover {
  background-color: #f89914;
}

.bar:hover,
.bar:focus {
  background-size: 100% 3px;
}



.logoUtal {
  position: relative;
  height: 70px;

}

.columnNavBar {
  position: relative;
  height: 100px;
  align-content: center;
  justify-content: center;
}
</style>
