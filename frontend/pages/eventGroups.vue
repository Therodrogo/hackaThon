<template>
  <v-app id="inspire">
    <v-main class="white">
      <v-container>
        <v-row>
          <v-col
            lg="9"
            md="9"
            sm="9"
            xs="9">
            <v-sheet rounded="md">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Groups
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item-group
                mandatory
                color="#00CCB1">
                    <v-text-field
                    prepend-icon='mdi-card-search-outline'
                    label='Buscar Grupo'
                    v-model="findgroup"



                    ></v-text-field>
                    <v-list-item  v-for= "(n,i) in FilterGroups" :key="i"  >


                        <v-btn  @click="selectedGroup = n.name"  left min-width="100%">
                          {{n.name}}
                        </v-btn>
                        <h3 class='text-center ml-5 mr-5'> {{n.count}}/5 </h3>
                        <v-btn   v-if="n.count < grouplimit && !noLogueado" @click = SendRequest(n)>+</v-btn>


                    </v-list-item>
                </v-list-item-group>

                <v-divider class="my-2"></v-divider>
              </v-list>
            </v-sheet>
          </v-col>
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
      async SendRequest(n){
          //console.log(n);
          //console.log(this.findgroup);

          //n.userID.push({name:userStore.user.name})
          //console.log(userStore.user.name);
          const local = await API.getUserByID(userStore.user);
          console.log(local.data);
          let data = {
            postulant:local.data._id,
            description: "el usuario "+local.data.name+ " quiere unirse ",
            groupID:n.id,
          }
          console.log(n.id);
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
        let tema = await API.getRequests()
        console.log(tema);

      },




      async getEventByID(){
      try {

        const res = await API.getEventByID(eventoStore.getEventId);
       




        this.grouplimit = res.data.groupLimit;

        //const cosa = await API.getAllGroups();
        const cosa = await API.getGroupsFromEvent(eventoStore.getEventId); // ACTUALMENTE  USADA
        console.log(cosa.data);
        cosa.data.forEach  (async n => {
            console.log(n._id+" si");
            const gro = await API.getGroupByID(n._id);
            console.log(gro);
            console.log(gro.data.name+" | "+gro.data.userID.length);
            this.groups.push({id: n._id,name: gro.data.name,count:gro.data.userID.length});

        });



        console.log(res.data);


      } catch (error) {

      }
      }

    }, beforeMount() {
      this.getEventByID()

    }

  }



</script>
