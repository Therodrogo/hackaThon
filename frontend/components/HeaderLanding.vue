<template>
  <v-app-bar min-height="80px" color="#00CCB1" scroll-target="#scrolling-techniques-7">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col>
          <img class="logo" src="https://puropellet.cl/wp-content/uploads/2019/02/utalca-puropellet.png">

        </v-col>



        <v-col cols="5">

          <center>

            <nuxt-link to="/">
              <v-btn :color="colorBotones">
                Home

              </v-btn>

            </nuxt-link>

            <nuxt-link to="/aboutUs">
              <v-btn :color="colorBotones">
                Nosotros
              </v-btn>
            </nuxt-link>


            <nuxt-link to="/ComoParticipar">
              <v-btn :color="colorBotones">
                Como participar
              </v-btn>
            </nuxt-link>
            <nuxt-link to="/PremiosV">
              <v-btn :color="colorBotones">
                Premios
              </v-btn>
            </nuxt-link>

          </center>

        </v-col>


        <v-col>
          <v-btn color="white" class="btnLogin" height="fit-content" to="/loginWindow">
            <v-img class="user" lazy-src="https://cdn-icons-png.flaticon.com/512/72/72648.png" width="50"
              src="https://cdn-icons-png.flaticon.com/512/72/72648.png"></v-img>
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>


</template>



     
<script>
export default {
  data() {
    return {
      value: 'recent',
      test: {
        nombreusuario: '....',
        contraseña: '',
      },
      test1: false,
      test2: '',
      colorBotones: '#575654',
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
.v-btn {
  margin-inline: 10px;
}

.contenedor {
  width: 300px;
  background-color: #00ccb1;
  height: fit-content;
  color: aliceblue;
  margin-top: 1%;
  margin-left: 35%;
  margin-right: 40%;
}

.menu {
  justify-content: center;
  align-content: center;
}

.logo {
  margin-left: 50px;
  margin-top: 15px;
  height: 60px;
}

.btnLogin {

  float: right;
  background: #313c75;
  position: relative;
  margin: 5px;
  width: 80px;
  transition: 0.5s;
  z-index: 6;
}

.btnLogin:hover {
  background: #677ef5;
  transition: 0.5s;
}
</style>