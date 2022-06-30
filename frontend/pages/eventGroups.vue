<template>
  <v-app id="inspire">
    <v-main class="white">
      <v-container>
        <v-row>
          <v-col 
            lg="12"
            md="12"
            sm="10"
            xs="10">
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
                    <v-list-item v-for="n in groups" :key="n">
                      <v-btn @click="selectedGroup = n.name"  left min-width="100%">
                        {{n.name}}
                      </v-btn>
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
    import API from "../api";
    export default {
        
        data (){ 
            
            return { 
              selectedGroup: "evento",
                groups:[ ],
                code: '',
                snackbar:false,


            }
            

        },
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
            const datagroups = await API.getAllEvents();
            //const datagroups = await API.getGroupsFromEvent(id)
            console.log( datagroups.data);
            console.log(datagroups)

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

        }     
    }

</script>