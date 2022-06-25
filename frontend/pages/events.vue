<template>
  <v-app style="
    background: #ffffff;"
  >

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in events" :key="n"
            lg="4"
            md="4"
            sm="6"
            xs="12"
          >
          <v-card>
            <v-img
              :src="n.coverURL"
              height="200px"
            >
            <v-card-title><p class="textBorder">{{n.name}}</p></v-card-title>
            </v-img>
      <v-card-subtitle class="pb-0">
        <p>Location: {{n.location}}</p>
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <p>Date start: {{n.dateStart}}</p>
        <p>Date finish: {{n.dateFinish}}</p>
      </v-card-text>
    <v-card-actions>
      <v-btn color=#009a82 to="/infoEvent" class="white--text">
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
          {id: "", name: "hackaton ucm", dateStart: "24 de julio, 2023", dateFinish: "31 de marzo, 2024", location: "Talca", coverURL: "https://www.profesionalreview.com/wp-content/uploads/2020/05/hackathon-esquema.jpg"},
          {id: "", name: "miauthon", dateStart: "25 de julio, 2023", dateFinish: "29 de enero, 2030", location: "Little Rock", coverURL: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=-tX3EMqT"},
          {id: "", name: "piumba", dateStart: "21 de septiembre, 2023", dateFinish: "30 de enero, 2024", location: "Curico", coverURL: "https://scontent.fscl10-1.fna.fbcdn.net/v/t1.6435-9/42837656_10209778115209747_7485570677676703744_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=dn3vRO51pIgAX-nLPGD&_nc_ht=scontent.fscl10-1.fna&oh=00_AT8nAKZQvCjJa4sWLqCne8azP4-MPUmvCCEHxW-ncqwOvw&oe=62DC728B"},
        ]
      }
    }
  }
</script>

<style>
  .textBorder{
    text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
    color: #fff
  }
</style>