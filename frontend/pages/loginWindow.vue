<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center" cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row class="fill-height">
                <v-col cols="12" md="6" class="primary">
                  <img class="logo-utalca" height="100px" alt="logo-utalca" src="/logo-utalca.png" />

                </v-col>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-6">
                    <p class="text-center">Iniciar sesión</p>
                    <h3 class="text-center mt-5">Ingresa tus datos</h3>
                    <v-card-text>
                      <v-form @submit.prevent ref="form" v-model="valid" lazy-validation>
                        <v-text-field name="login" label="Usuario" v-model="email" :rules="emailRules"
                          prepend-icon="mdi-account" type="text" color="#3d4545"></v-text-field>
                        <v-text-field id="password" name="password" v-model="password" :rules="passwordRules"
                          prepend-icon="mdi-lock" label="Contraseña" type="password" color="#3d4545">
                        </v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="#cc7c0a" to="/createUser">
                        <v-text class="textBtn">Crear Usuario</v-text>
                      </v-btn>
                      <v-btn color="primary" v-on:click="submit()">
                        <v-text class="textBtn">Iniciar Sesión</v-text>
                      </v-btn>
                    </v-card-actions>
                  </v-card-text>
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
import Swal from 'sweetalert2';
import API from "../api";
import { usuarioStore } from "../store/index.js"
import { usuarioActivo } from "../store/index.js"
const usuario = usuarioStore()

export default {
  name: 'Login',
  props: {
    source: String,
  },
  data() {
    return {

      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      passwordRules: [
        v => !!v || 'Contraseña es requerida',
        v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*(\W|_)+)(?=.{5,})/.test(v)
          || 'Min. 5 caracteres con al menos una mayúscula, una minúscula, un número y una caracter especial',
      ],
      primaryColor: "#00ccb1"
    }
  },
  methods: {

    async submit() {
      this.$emit('submit', 'carrier');
      //console.log("LOGIN")
      if (!this.email == '' && !this.password == '') {

        const user = await API.signUpUser({ "mail": this.email, "password": this.password });
        console.log(user)
        if (user.code == 200) {
          usuario.user = user.data
          Swal({
            title: "Bienvenido " + usuario.user.name,
            text: "Tu rol es: " + usuario.user.role,
            icon: "success",
          })
          console.log("Se logueo " +  usuario.user.name)
          const usuarioLogeado = usuarioActivo()
          usuarioLogeado.CHANGE_NAV_LAYOUT(usuarioLogeado, usuario.user.name )

          const userLogged = usuarioStore()
          userLogged.setUser(usuario.user._id)

          this.$router.push({ path: '/userGroups' })

        }
        else {
           this.$emit("logeado");
          Swal({
            title: "Credenciales incorrectas",
            icon: "error",
          });
        }
      } else {
        Swal({
          title: "Ha ocurrido un error",
          text: "Debes ingresar las credenciales",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.v-main {
  background: linear-gradient(rgba(255, 255, 255, .6), rgba(255, 255, 255, .6)), url('/25329.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.textBtn {
  color: #FFFFFF;
}

h1 {
  color: #00ccb1;
}

.logo-utalca {
  width: 25%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

}

p {
  font-size: 40px;
  font-weight: 900;
  color: #00CCB1;
}
</style>
