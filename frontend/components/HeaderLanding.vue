<template>

  <div>
    <v-app-bar dense fixed app height='80'>
      <!-- Add this class to show menu icon only on small screen -->
      <v-app-bar-nav-icon @click='drawer = true' class='d-flex d-md-none'></v-app-bar-nav-icon>
      <v-row>
        <v-col md='1'>
          <nuxt-link to='/'>

            <img class='logoUtal' src='https://i.ibb.co/3hgwd3t/u-logo.png'>

          </nuxt-link>
        </v-col>

        <!-- Add this class to show tabs only on medium screen and above -->
        <v-col md='10' class='d-none d-md-flex columnNavBar'>

          <div class='algo'></div>
          <nuxt-link to='/'>
            <div class='bar'>
              Inicio
            </div>

          </nuxt-link>


          <nuxt-link to='/aboutUs'>
            <div class='bar'>
              Nosotros
            </div>

          </nuxt-link>


          <nuxt-link to='/ComoParticipar'>
            <div class='bar'>
              ¿Cómo participar?
            </div>

          </nuxt-link>


          <nuxt-link to='/events'>
            <div class='bar'>
              Eventos
            </div>
          </nuxt-link>

          <nuxt-link v-if='quitarBotones' to='/loginWindow'>

            <!-- Login -->

            <div @click='loginEvent()' class='loginText'>
              Iniciar Sesión
            </div>

          </nuxt-link>

          <nuxt-link v-if='quitarBotones' to='/createUser'>

            <!-- RegisterUser -->

            <div class='registerText'>
              Crear Usuario
            </div>

          </nuxt-link>


          <!-- Header -->
          <!-- UsuarioActivo -->
          <!-- Lista desplegable Mi perfil, Cerrar Sesión-->
          <div>

            <v-menu offset-y v-if='!quitarBotones'>
              <template v-slot:activator='{ on, attrs }'>

                <v-btn class='miNombre' color='primary' v-bind='attrs' v-on='on' height='43' width='130'>


                  <p class='JetBrains Mono'>


                    <br>
                    {{ usuarioActivoComputed }}

                  </p>
                </v-btn>
              </template>
              <v-list shaped>
                <v-list-item v-for='(item, index) in items2' :key='index'>

                  <v-list-item-icon>
                    <v-icon v-text='item.icon'></v-icon>
                  </v-list-item-icon>
                  <nuxt-link :to='item.to'>
                    <v-list-item-title v-on:click='logout(index)'>{{ item.title }}</v-list-item-title>
                  </nuxt-link>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>

    </v-app-bar>
    <v-navigation-drawer v-model='drawer' absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to='/'>
                <div class='drawerBar'>
                  Inicio
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to='/aboutUs'>
                <div class='drawerBar'>
                  Nosotros
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to='/ComoParticipar'>
                <div class='drawerBar'>
                  ¿Cómo participar?
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <nuxt-link to='/events'>
                <div class='drawerBar'>
                  Eventos
                </div>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if='quitarBotones'>

            <v-list-item-title v-if='quitarBotones'>
              <nuxt-link v-if='quitarBotones' to='/loginWindow'>


                <div class='loginText'>
                  {{ user }}
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if='quitarBotones'>
            <v-list-item-title v-if='quitarBotones'>
              <nuxt-link v-if='quitarBotones' to='/createUser'>

                <!-- RegisterUser -->

                <div class='registerText'>
                  Crear Usuario
                </div>

              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if='!quitarBotones'>
            <v-list-item-title v-if='!quitarBotones'>
              <!-- UsuarioActivo, movil -->
              <!-- Lista desplegable Mi perfil, Cerrar Sesión -->
              <div>
                <v-menu offset-y v-if='!quitarBotones'>
                  <template v-slot:activator='{ on, attrs }'>
                    <v-btn class='miNombre' color='primary' v-bind='attrs' v-on='on' height='40' width='130'>
                      <p class='JetBrains Mono'>
                        <br>
                        {{ usuarioActivoComputed }}
                      </p>
                    </v-btn>
                  </template>


                  <v-list shaped>

                    <v-list-item v-for='(item, index) in items' :key='index'>

                      <nuxt-link :to='item.to'>
                        <v-list-item-title v-on:click='logout(index)'>{{ item.title }}</v-list-item-title>
                      </nuxt-link>
                    </v-list-item>


                  </v-list>

                </v-menu>
              </div>

            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>

      </v-list>

    </v-navigation-drawer>
  </div>
</template>


<script>

import { usuarioStore } from '../store/index.js';

export default {

  data() {
    return {
      drawer: false,
      user: 'Iniciar Sesion',
      user2: 'Crear Usuario',
      quitarBotones: true,
      usuarioActivoComputed: '',

      items: [
        { title: 'Editar perfil', to: '/editUser' },
        { title: 'Mis grupos', to: '/userGroups' },
        { title: 'Cerrar sesión', to: '/' },
      ],

      items2: [
        { title: 'Editar perfil', to: '/editUser', icon: 'mdi-grease-pencil' },
        { title: 'Mis grupos', to: '/userGroups', icon: 'mdi-account-group' },
        { title: 'Cerrar sesión', to: '/', icon: 'mdi-close-circle' },
      ],


    };
  },
  props: {
    menuEstudiante: Boolean,
    menuAdministrador: Boolean,
    posicionMono: String,
  },
  methods: {
    loginAppear: function() {
      console.log('aa');
    },
    //Actualiza los botones al deslogearse
    logout: (index) => {
      //Si presiona el boton 2, cerrar sesión, cerramos la sesión :s
      if (index == 2) {
        console.log('logout');
        const user = usuarioStore();
        user.logout();
      }
    },
    //Actualiza el nombre del usuario
    usuarioActivoComputed() {
      const userStore = usuarioStore();
      this.usuarioActivoComputed = userStore.getLayout();
    },
    //Actualiza los botones al loguearse
    quitarBotones() {
      const userStore = usuarioStore()
      this.quitarBotones = userStore.getStatus()!=="active";
    },
  },
  mounted() {
    this.quitarBotones();
  },
};
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


.miNombre {
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

.miNombre:hover {
  background-color: #04e4c6;
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

.v-text-field input {
  font-size: 1.2em;
}
</style>
