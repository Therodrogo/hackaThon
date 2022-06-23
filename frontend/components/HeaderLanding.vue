<template>
  <div class="contenedor">
      <div>

         <nuxt-link to="/">


        <img class="logo" src="https://i.ibb.co/3hgwd3t/u-logo.png">

        </nuxt-link>
      </div>
      <div class="nav">

            <nuxt-link  to="/">
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

        </div>

         <nuxt-link to="/loginWindow">
          <!-- LOGO -->
          <div class="logoLogin" >
          <img  width="45"
          src="https://i.ibb.co/xqKnzvb/user-White.png">
           </div>
          </nuxt-link>
  </div>
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


.contenedor{
  height: 150px;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.nav{
  display: inline-block;
  margin: 40px;
}
.bar{
  margin-inline: 20px;
  display: inline-block;
  color: black;
  padding: 10px;
  text-decoration: none;
  background-image: linear-gradient(#CC7C0A,#CC7C0A);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px ;
  transition: background-size .3s;
}


.bar:hover, .bar:focus{
  background-size: 100% 3px;
}


a.nuxt-link{
  margin-inline: 30px;
  margin-top: 30px;
  background: #313c75;
  background-color: #313c75;
  color:rgb(223, 223, 223);

}
.user{
  margin-top: 15px;
}
.nuxtFont{
  font-size: 20px;
}
a.nuxt-link-exact-active .bar{
  background-size: 100% 4px;
}

.menu {
  justify-content: center;
  align-content: center;
}

.logo {
  height: 90px;
  float: left;
  margin: 20px;
  margin-right: 300px;
}
.logoLogin{
  float: right;
  background: #00ccb1;
  position: relative;
  width: 60px;
  text-align: center;
  margin: 20px;
  margin-left: 300px;
}
.btnLogin {
  float: right;
  background: #00ccb1;
  position: relative;
  margin-right: 90px;
  width: 60px;
  transition: 0.5s;
  margin-top: 45px;
}

</style>
