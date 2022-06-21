<template>
  <v-app style="
    background: #ffffff;"
  >

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in events"
            :key="n"
            cols="4"
          >
          <v-card
          >
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title>{{n[0]}}</v-card-title>
            </v-img>
      <v-card-subtitle class="pb-0">
        <p>Location: {{n[3]}}</p>
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <p>Start date: {{n[1]}}</p>
        <p>Finish date: {{n[2]}}</p>
      </v-card-text>
    <v-card-actions>
      <v-btn color=#00ccb1 to="/infoEvent">
        More info
      </v-btn>
    </v-card-actions>
  </v-card>
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
        events: [
          ["hackaton ucm", "24 de julio, 2023", "30 de julio, 2023", "Talca"], ["utalhkton", "30 de septiembre, 2022", "31 de septiembre, 2022", "Curico"], ["piuuuuumba", "10 de marzo, 2025", "11 de marzo, 20", "Santiago"],["piumba2", "21 blalbfd", "ejwkfjkaew", "Marte"]
        ]
      }
    }
  }
</script>
