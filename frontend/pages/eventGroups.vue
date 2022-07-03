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
                        <h3 class='text-center ml-5 mr-5'> {{n.user.length}}/5 </h3>
                        <v-btn   v-if="n.user.length != 5 && estado != null" @click = addGroup(n)>+</v-btn>
                      

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

import {eventStore} from "../store/index.js"
import {usuarioStore} from "../store/index.js"
const eventoStore = eventStore()
const userStore = usuarioStore()
  export default {
    data () {
      return {

        findgroup:"", 
        selectedGroup: "los vios",
        groups:[ 
        ],
        estado : null,
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
          return newgroup.name.match(this.findgroup);
        })
      }
    },
    methods: {
      addGroup(n){
          console.log(n);
          console.log(this.findgroup);
          swal({
            title: "Solicitud enviada",
            text: "a "+n.name,
            icon: "success",
          })
          n.user.push({name:"f"})
          console.log(n.user)
        

      },



      
      async getEventByID(){
      try {
        
        const res = await API.getEventByID(eventoStore.getEventId);
        //const userdata = await API.getUserByID(userStore.getUserId);
        //this.estado = userStore.estado;
        this.estado = "sdasd"
        console.log("sadhsjkdjkahdkhaskdhajhdashdkhsakdhkj")
        console.log(eventoStore);

        
      
        
        
        this.groups.push({name: "GRUPO 1", userID: "yik1", eventID:"",num:1,user:[{name:"a"},{name:"c"}]});
        this.groups.push({name: "GRUPO 2", userID: "yik1", eventID:"",num:2,user:[{name:"a"},{name:"b"}]});
        this.groups.push({name: "GRUPO 3", userID: "yik1", eventID:"",num:0,user:[{name:"a"},{name:"b"},{name:"c"}]},);
        this.groups.push({name: "GRUPO 34", userID: "yik1", eventID:"",num:0,user:[{name:"a"},{name:"b"},{name:"c"}]},);
        this.groups.push({name: "GRUPO 4", userID: "yik1", eventID:"",num:3,user:[{name:"b"},{name:"c"}]});
        this.groups.push({name: "GRUPO 5", userID: "yik1", eventID:"",num:0,user:[{name:"a"},{name:"b"},{name:"c"},{name:"d"},{name:"e"}]});
        this.groups.push({name: "GRUPO 6", userID: "yik1", eventID:"",num:4,user:[{name:"a"}]});
        this.groups.push({name: "GRUPO 7", userID: "yik1", eventID:"",num:1,user:[{name:"a"},{name:"b"}]},);

        

        
      } catch (error) {
        
      }  
      }

    }, beforeMount() {
      this.getEventByID()

    }

  }
        /** 
        async mounted(){// se consultara a la BD
        const dat = {
            name:"Grupo2",
            userID:"sjdldsfdsfkadkk",
            visibility:true,
            code:"sgdsadja",
            leaderID:"adsfsia",
            eventID:"adfdsfssadas"
        }
            const id = "texto";
            //InsertData( id);
            const dataevent = await API.getEventByID(evento.getEventId);
            //const datagroups = await API.getGroupsFromEvent(id)
            console.log( dataevent);


            this.groups.push({name: "GRUPO 1", userID: "yik1", eventID:""});
            this.groups.push({name: "GRUPO 2", userID: "yik1", eventID:""});
            this.groups.push({name: "GRUPO 3", userID: "yik1", eventID:""},);
            this.groups.push({name: "GRUPO 4", userID: "yik1", eventID:""});
            this.groups.push({name: "GRUPO 5", userID: "yik1", eventID:""},);
            this.groups.push({name: "GRUPO 6", userID: "yik1", eventID:""});
            this.groups.push({name: "GRUPO 7", userID: "yik1", eventID:""},);
  
        },
        methods:{
            MoreInfo(){

            },
            async InsertData( id){

 
            }

        }     */
    
    
</script>