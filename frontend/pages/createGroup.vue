<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center" cols="12" sm="8" md="8">
            <v-card class="elevation-12">
                <v-row class="fill-height">
                    <v-col  cols="12" md="6" class="primary">
                     <img class="logo-utalca"  height="250px" alt="logo-grupo" src="/group.png" />     
                </v-col>
                <v-col cols="12" md="6">
                  <p class="text-center">Crear grupo</p>
                  <v-card-text class="mt-6" >
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation>

                        <v-text-field name="name" 
                        label="Nombre" 
                        v-model="Nombre" 
                        type="text"
                        :rules="required"
                        color="#3d4545" >
                        </v-text-field>
                          
                            <v-btn color="primary" v-on:click="crearGrupo()">
                            <v-text class="textBtn" >Crear grupo</v-text>
                            </v-btn>
                    </v-form>
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
import API from "../api";
import {eventStore} from "../store/index.js"
import {usuarioStore} from "../store/index.js"
const userStore = usuarioStore()
const eventoStore = eventStore()

  export default {
    data () {
      return {
        rules: {
          required: value => !!value || 'Required.',
        }
      }
    },
    methods: {

      async crearGrupo(){
        const res = await API.getUserByID(userStore.getUserId);
        const resEvent = await API.getEventByID(eventoStore.getEventId);
        console.log("Se ha creado un grupo llamado: "+this.Nombre+"\nCon el usuario: "+ res.data.name+"\nRegistrado con el mail: " + res.data.mail+"\nEn el evento: "+resEvent.data.name);
        let data = {
          name: this.Nombre,
          visibility: true,
          leaderID: res.data._id,
          eventID: resEvent.data._id,
        };
        let result = await API.postGroup(data)
        swal({
          title: "Grupo "+this.Nombre+" creado",
          text: "El lider es: " + res.data.name,
          icon: "success",
        })
        this.$router.push('events');
      },
  },
}
</script>

<style scoped>
.v-main{
  background: linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)), url('/25329.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.textBtn{
    color: #FFFFFF;
}
h1{
    color: #00ccb1;
}
  .logo-utalca{
    width: 25%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

  }
  p{
    font-size: 40px;
    font-weight: 900;
    color: #00CCB1;
  }
</style>
