<template>
    <v-app id="inspire">
        <v-main class="white">
            
            <v-container>
                
        <v-row>
              <v-btn
              to='/userGroups'
              color='primary'
              fab small
              large
              >
              <v-icon dark>
                mdi-arrow-left-bold
              </v-icon>
            </v-btn>
            <v-col
            lg="7"
            md="7"
            sm="7"
            xs="7">
                <v-col align="center">
                
                    <v-text-field
                        prepend-icon='mdi-card-search-outline'
                        label='Buscar Solicitudes'
                        v-model="findrequest"
                    class="v-text-field"
                    ></v-text-field>
                </v-col>
                <v-sheet
                left min-height="100%"
                rounded="lg">
                    
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                Solicitudes pendientes
                            </v-list-item-title >
                            <v-list-item-group  mandatory color="#00CCB1" >
                                <v-list-item v-for="(n,i) in FilterRequest" :key="i" >
                                    <v-btn @click="SelectedReq(n)"  text min-width="50%" mx-auto>
                                        {{n.name}}
                                    </v-btn>
                                    <v-btn @click="AcceptRequest(n)" class=' ml-5 mr-5' color="#00ff00">aceptar</v-btn>
                                    <v-btn @click="DeclineRequest(n)" color="#ff0000">denegar</v-btn>
                                </v-list-item>

                                
                            </v-list-item-group>
                        </v-list-item-content>
                    </v-list-item>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet
                height="500"
                rounded="lg"
                color="#00CCB1">
                    <template v-slot>
                        <span
                        v-for="(n,f) in Request"
                        :key="f">
                        <p v-if="n.name == selectedRequest" >
                            <v-card
                            class="mx-auto"
                            max-width="700">
                            <v-card-title >
                                Nombre: {{n.name}}
                            </v-card-title>
                            <v-card-text class="text--primary">
                                Evento: {{n.description}}
                            </v-card-text>
                            </v-card>
                        </p>
                        </span>
                    </template>
                </v-sheet>
            </v-col>
        </v-row>
        
            </v-container>
            
        </v-main>
    </v-app>
</template>


<script>
// nota de una reunion : tiene que tener un diseño similar a la de UserGroups  

import API from '~/api'
import Swal from 'sweetalert2';
import {usuarioStore} from "../store/index.js"
import {usuarioActivo} from "../store/index.js"
import {eventStore} from "../store/index.js"
const userStore = usuarioStore()
const activeStore = usuarioActivo()
const eventoStore = eventStore()

  export default {
    data () {
      return {
        first: false,
        findrequest:"",
        selectedRequest: "",
        Request:[

        ],
    }
    },
    computed:{
      FilterRequest(){
        return this.Request.filter(newRequest =>{

          return newRequest.name.toLowerCase().trim().match(this.findrequest.toLowerCase().trim());
        })
      },
    },
    methods: {
        SelectedReq(n){
        this.selectedRequest = n.name
        },

        async getEventByID(){
            try {
                const gp = await API.getGroupByID("62c914215384ad085d39f3a5")
                const cosa = await API.getRequestGroup({groupID: "62c914215384ad085d39f3a5"})
                //const cosa = await API.getAllGroups();
                this.Request = []
                console.log(cosa.data);
                cosa.data.forEach  (async n => {
                    const local = await API.getUserByID(n.postulant);
                    this.Request.push({_id: n._id,postulant: n.postulant,leader: gp.data.leaderID,name: local.data.name,description: n.description});
                });
            } catch (error) {
            console.log(error)
            }
        },
        async AcceptRequest(data){
            await API.acceptRequest({requestID: data._id,leaderID: data.leader});
            console.log(data)
            const cosa = await API.getRequestGroup({groupID: "62c914215384ad085d39f3a5"})
            //const cosa = await API.getAllGroups();
            this.Request = []
            console.log(cosa.data);
            cosa.data.forEach  (async n => {
                const local = await API.getUserByID(n.postulant);
                this.Request.push({_id: n._id,postulant: n.postulant,leader: n.leaderID,name: local.data.name,description: n.description});
            });
        },

        async DeclineRequest(data){
            //await API.deleteRequestById(data._id)

            await API.declineRequest({requestID: data._id,leaderID: data.leader})
            console.log(data)
            const cosa = await API.getRequestGroup({groupID: "62c914215384ad085d39f3a5"})
            //const cosa = await API.getAllGroups();
            this.Request = []
            console.log(cosa.data);
            cosa.data.forEach  (async n => {
                const local = await API.getUserByID(n.postulant);
                this.Request.push({_id: n._id,postulant: n.postulant,leader: n.leaderID,name: local.data.name,description: n.description});
            });
        }

    


    }, beforeMount() {
      this.getEventByID()
    }
  }
  



</script>
