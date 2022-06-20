<template>
  <v-app-bar min-height="100px" color="white" scroll-target="#scrolling-techniques-7">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col>
          <img class="logo" src="https://i.ibb.co/3hgwd3t/u-logo.png">

        </v-col>



        <v-col class="nuxtFont" cols="5" >

          <center>
          
            <nuxt-link  to="/">
              <div class="bar">
                  Home
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
        
            <nuxt-link to="/PremiosV">
                 <div class="bar">
                  Eventos
              </div>
            </nuxt-link>
   
          
          </center>

        </v-col>


        <v-col>
          <!-- LOGO -->
          <v-btn color="#00c58e" class="btnLogin" height="fit-content" to="/loginWindow">
            <v-img  lazy-src="https://cdn-icons-png.flaticon.com/512/72/72648.png" width="50"
              src="https://i.ibb.co/xqKnzvb/user-White.png"></v-img>
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
      colorBotones: 'white',
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

.bar{
  margin-inline: 20px;
  display: inline-block;
  color: black;
  padding: 10px;
  margin-top: 90px;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;

 transition: 0.5s;
}
a.nuxt-link{
  margin-inline: 30px;
  margin-top: 30px;
  background: #313c75;
  background-color: #313c75;
  color:rgb(223, 223, 223);

}
.user{
  margin-top: 10px;
}
.nuxtFont{
  font-size: 20px;

}
a.nuxt-link-exact-active .bar{
  background-color: #00c58e;
  color: white;
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
  margin-top: 35px;
  height: 90px;
}

.btnLogin {

  float: right;
  background: #313c75;
  position: relative;
  margin: 5px;
  width: 80px;
  transition: 0.5s;
  z-index: 6;
  margin-top: 35px;
}

.btnLogin:hover {
  background: #677ef5;
  transition: 0.5s;
}
</style>