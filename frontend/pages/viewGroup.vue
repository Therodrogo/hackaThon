<template>
  <v-app id="inspire">
    <v-main class="white">
      <v-container>
        <v-btn>
            editar perfil
        </v-btn>
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
                      Groups
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item-group
                v-model="model"
                mandatory
                color="#00CCB1">
                    <v-list-item v-for="n in groups" :key="n" link>
                        <v-list-item-content>
                            <v-list-item-title>
                              {{n.name}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

                <v-divider class="my-2"></v-divider>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title>
                      New group
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              height="60vh"
              rounded="lg"
              color="#00CCB1">
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script> 
    export default {
        data (){ 
            return { 
                groups:[ 
                    {name: "los vios"},
                    {name: "simps de profe Daniel"}, 
                    {name: "dasfad"},
                ] 
            } 
        } 
    } 
</script>