<template>
  <v-app id="inspire">
    <v-main class="white">
      <v-container>
        <v-row>
          <v-col>
              <v-btn
              to='/infoEvent'
              color='primary'
              fab small
              large
              >
              <v-icon dark>
                mdi-arrow-left-bold
              </v-icon>
            </v-btn>

              <v-col align="center">
                    <v-text-field
                    prepend-icon='mdi-card-search-outline'
                    label='Buscar Grupo'
                    v-model="findgroup"
                    class="v-text-field"
                    ></v-text-field>
              </v-col>
          </v-col>
                    <v-col v-for= "(n,i) in FilterGroups" :key="i" lg="4" md="4" sm="6" xs="12" >
                      <v-card>
                        <v-card-title><p class="textBorder">{{n.name}}</p></v-card-title>
                        <v-img class="logo-utalca"  src="/group.png" height="200px ">
                          
                        </v-img>
                        <v-card-text class="text--primary">
                          <p>Lider del grupo: {{obtenerLider(n.id)}}</p>
                        </v-card-text>
                     
                          <h3 class='text-center ml-5 mr-5'> {{n.Users.length}}/5 </h3>
                          <v-card-actions>
                            <v-btn   :disabled="VerifySend(n)" @click = SendRequest(n) color="#00CCB1" class="white--text">{{n.texto}}</v-btn>
                          </v-card-actions>
                      </v-card>
                      </v-col>

                <v-divider class="my-2"></v-divider>
          
        </v-row>
        <v-snackbar
          v-model="snackbar"
        >
          <template v-slot:action="{ attrs }">
            <v-btn
              color="#00CCB1"

              v-bind="attrs"
              @click="snackbar = false"
            >
              Cerrar
            </v-btn>


          </template>
        </v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import API from '~/api'
import Swal from 'sweetalert2';

import {eventStore} from "../store/index.js"
import {usuarioStore} from "../store/index.js"
import {usuarioActivo} from "../store/index.js"
const eventoStore = eventStore()
const userStore = usuarioStore()
const activeStore = usuarioActivo()
  export default {
    data () {
      return {
        grouplimit:5,
        findgroup:"",
        selectedGroup: "los vios",
        groups:[
        ],
        noLogueado : true,
        code: 400,
        snackbar:false,
        text:'',
        findRules: [
          v => [this.findgroup].test(v),
        ],
        groupsLeaders:[
        ],
      }
    },
    computed:{
      FilterGroups(){
        return this.groups.filter(newgroup =>{

          return newgroup.name.toLowerCase().trim().match(this.findgroup.toLowerCase().trim());
        })
      }
    },
    methods: {

      VerifySend(n){

        //const gro = await API.getGroupByID(n.id);
        
        var verLeader = n.Users.find(obj => {return obj._id === userStore.id})
        var verRequest = n.RequestID.find(obj => {return obj.postulant === userStore.id})
        var verjoin = n.Users.find(obj => {return obj === userStore.id})
        if(n.Users.length >= this.grouplimit) {
          n.texto = "grupo lleno"
          return true
        }else if (this.noLogueado ) {
          return true
        }else if (n.leader == userStore.id ){
          n.texto = "Eres lider"
          return true
        }else if (!(typeof verLeader === "undefined" )){
          return true

        }else if (!(typeof verjoin  === "undefined" )){
          n.texto = "Unido"
          return true
    
        }else if (!(typeof verRequest === "undefined")){
          n.texto = "Solicitud enviada"
          return true
        }

        return false

      },


      async SendRequest(n){
          //console.log(n);
          //console.log(this.findgroup);

          //n.userID.push({name:userStore.user.name})
          //console.log(userStore.user.name);
          const local = await API.getUserByID(userStore.id);
          console.log(local.data);
          let data = {
            postulant:local.data._id,
            description: "el usuario "+local.data.name+ " quiere unirse ",
            groupID:n.id,
          }
          console.log(n.id);
          Swal.fire({
            title: 'Ingrese un comentario',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            showLoaderOnConfirm: true,
            preConfirm: async (input) => {
              data.description = input ;
              n.RequestID.push(data)
              let result = await API.postRequest(data);
              if (typeof result === 'undefined') {
                Swal.fire({
                  title: 'Ha ocurrido un error de conexión',
                  icon: 'error',
                  confirmButtonColor: '#00CCB1',
                });
              }else {
                if (result.code == 200) {
                  Swal.fire({
                    title: "Solicitud enviada",
                    text: "a "+n.name,
                    icon: "success",
                  })
                }
              }

            } 
          })
          


      },
    
    obtenerLider(n){
      var userFound="";
      this.groupsLeaders.forEach((group) => {
        if(n==group[0]){
          userFound=group[1];
        }
      });
      return userFound;
    },

    async getLeaders(){
        let groupsAndLeaders = [];  
        let [allGroups, AllUsers] = await Promise.all([API.getAllGroups(), API.getAllUsers()]);
        var allGroupsData = new Array();
        var allUsersData = new Array();
        allGroupsData= allGroups.data;
        allUsersData= AllUsers.data;
        allGroupsData.forEach((group) => {
            allUsersData.forEach((usuario) => {
              if(group.leaderID==usuario._id){
                if (!groupsAndLeaders.includes([group.id,usuario._id])) {
                  groupsAndLeaders.push([group._id,usuario.name]);
                }
              }
            });
        });
       this.groupsLeaders= groupsAndLeaders;
    },

      async getEventByID(){
      try {

        const res = await API.getEventByID(eventoStore.getEventId);
        console.log(eventoStore.getEventId+ " aqui");
        //const userdata = await API.getUserByID(userStore.getUserId);
        console.log(userStore.id);

        console.log("sadhsjkdjkahdkhaskdhajhdashdkhsakdhkj")
        this.noLogueado = activeStore.noLogueado; // aca se comprueba si esta el usuario logeado
        //console.log(usuarioStore);




        this.grouplimit = res.data.groupLimit;

        //const cosa = await API.getAllGroups();
        const cosa = await API.getGroupsFromEvent(eventoStore.getEventId); // ACTUALMENTE  USADA
        console.log(cosa.data);
        cosa.data.forEach  (async n => {
            console.log(n._id+" si");
            const gro = await API.getGroupByID(n._id);

            console.log(gro.data.name+" | "+gro.data.userID.length);
            let conj = await API.getRequestGroup({groupID: n._id})
            this.groups.push({id: n._id,name: n.name,leader: n.leaderID,Users:n.userID,RequestID: conj.data,texto:"Solicitar Ingreso"});
        });


        

      } catch (error) {
        console.log(error)
      }
      }
    }, beforeMount() {
      this.getEventByID()
      this.getLeaders();
    }
  }



</script>

<style scoped>
  .textBorder{
    text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
    color: #fff
  }
    .logo-utalca{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 35%;

  }
  .v-text-field{
      width: 1400px;
      display: block;
      margin-left: auto;
      margin-right: auto;
}
</style>