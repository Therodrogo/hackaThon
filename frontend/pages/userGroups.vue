<template>
  <v-app id="inspire">
    <v-main class="white">
      <v-container>
       <br>

        <v-row>
          <v-col
            lg="4"
            md="4"
            sm="6"
            xs="12">
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      Grupos
                      <v-template >
                      
                      </v-template>
                    </v-list-item-title>
                    
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item-group
                v-model="model"
                mandatory
                color="#00CCB1">
                    <v-list-item
                    v-for="n in groups"
                    :key="n">
                    
                      <v-btn @click="selectedGroup = n.name ; isLeader(n.code)" text min-width="100%" mx-auto>
                        {{n.name}}
                      </v-btn>
                      
                    </v-list-item>
                </v-list-item-group>
                <v-divider class="my-2"></v-divider>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              height="550"
              rounded="lg"
              color="#00CCB1">
              <template v-slot>
                <span
                v-for="n in groups"
                :key="n">
                  <p v-if="n.name == selectedGroup">
                    <v-card
                      class="mx-auto"
                      max-width="700">
                      <v-card-title>
                        Nombre del grupo: {{n.name}}
                        <v-dialog
                          v-model="dialog"
                          width="500">
                          <template v-slot:activator="{ on, attrs }">
                            <span class="px-6">
                              <v-btn v-bind="attrs" v-on="on" fab small dark color="#00CCB1" v-if="save">
                                <v-icon >
                                  mdi-pencil
                                </v-icon>
                              </v-btn>
                            </span>
                          </template>
                          <v-card>
                            <v-card-title>
                              Cambiar nombre del grupo:
                            </v-card-title>
                            <v-card-text>
                              <v-text-field
                                v-model="name"
                                placeholder="Ingresar nuevo nombre"
                                clereable>
                              </v-text-field>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-btn
                                @click="dialog = false"
                                color="red" 
                                class="white--text">
                                Cancelar
                              </v-btn>

                              <v-btn
                                @click="updateNameGroup(name, n._id) ; dialog = false ; clearName()"
                                color=#009a82 
                                class="white--text">
                                  Aceptar
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                        <v-btn color = "white" small v-if="save">
                        Solicitudes
                          <v-badge color = "red" dot>
                            <v-icon>
                              mdi-bell-ring-outline
                            </v-icon>
                          </v-badge>
                      </v-btn>
                      </v-card-title>
                      <v-card-text class="text--primary">
                        Evento: {{n.eventID.name}}
                      </v-card-text>
                      <v-card-text class="text--primary">
                        Lider: {{n.userID[0].name}}
                      </v-card-text>
                      <v-card-text class="text--priary">
                        Miembros:
                      </v-card-text>
                      <v-card>
                        <v-list>
                          <v-list-item
                          v-for="i in n.userID"
                          :key="i"
                          class="px-12">
                            <v-list-item-title>
                              {{i.name}}
                            </v-list-item-title>

                            <v-list-item-action >
                              <v-btn @click="kickMember(i._id, n.code) ; " small dark color="red" v-if="save" >
                                Expulsar
                              </v-btn>
                            </v-list-item-action>
                          </v-list-item>
                        </v-list>
                      </v-card>
                      <v-card-actions >
                      <p v-if="save">
                         Código del grupo: {{n.code}}
                      </p>
                      </v-card-actions>
                    </v-card>
                  </p>
                </span>
              </template>
            </v-sheet>
          </v-col>
        </v-row>
        <v-container>
          <v-col lg="5">
            <v-form @submit.prevent="takeCode">
              <v-row :align="align" no-gutters>
                <v-text-field
                  v-model="code"
                  label="Código de invitación"
                  placeholder="Ingresar código">
                </v-text-field>
                <v-btn @click="joinGroupCode(code)" color = "#00CCB1" type="submit" large outlined>
                  <v-icon>
                    mdi-send
                  </v-icon>
                </v-btn>
              </v-row>
            </v-form>
          </v-col>

        </v-container>
        <v-snackbar
          v-model="snackbar"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="#00CCB1"
              text
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
    import API from '~/api';
    import {usuarioStore} from "../store/index.js"

    const user = usuarioStore()

    export default {
        data (){
            return {
                selectedGroup: "",
                groups:[

                ],
                code: '',
                snackbar:false,
                text:'',
                save: false,
                dialog: false,
                name: '',
                save: false,
              
            }
        },
        methods:{
          takeCode(){
            const codigo = this.code
            console.log(codigo)
            if(this.code === ''){
              this.snackbar=true
              this.text = 'Escriba un código válido'
            }
          },

          clearName(){
            this.name = ''
          },

          async isLeader(groupCode){
            const req ={
              userID: user.getUserId(),
              code: groupCode
            }
            try {
              const res = await API.isLeader(req)
              this.save = res.data
              return res.data
            } catch (error) {
            console.log(error)
            }
            return res.data
          },

          async getGroupsUser(id){
            try {
              const res = await API.getGroupsUser(id)
              this.groups = res.data

            } catch (error) {
              console.log(error)
            }
          },

          async kickMember(id, code){

            const req = {
              userID: id,
              leaderID: user.getUserId(),
              code: code,
            }
            console.log(req);
            try {
              const res = await API.kickMember(req);
              this.group = res.data;
            } catch (error) {
              console.log(error)
            }
            this.getGroupsUser(user.getUserId())
          },

          async joinGroupCode(code){
            const req = {
              code: code,
              userID: user.getUserId(),
            }
            try {
              const res = await API.joinGroup(req)
              this.group = res.data
            } catch (error) {
              console.log(error)
            }
            this.getGroupsUser(user.getUserId())
          },

          async updateNameGroup(name, id){

            const req = {
              nameGroup: name,
              groupID: id,
              userID: user.getUserId(),
            }
            try {
              const res = await API.updateNameGroup(req);
              console.log("here");
              console.log("res: "+ res);
              console.log(req)
            } catch (error) {
              console.log(error)
            }
            this.getGroupsUser(user.getUserId())
          },
        }, beforeMount() {
            this.getGroupsUser(user.getUserId())
            
        }
  }
</script>
