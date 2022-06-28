<template>
  <v-app style="
    background: #ffffff;">
    <v-main>

      <v-container>

        <h2 class="text-sm-h4">
         Eventos próximos:
        </h2>

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
                :src="n.coverUrl"
                height="200px"
              >
                <v-card-title><p class="textBorder">{{n.name}}</p></v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">
                <p>Location: {{n.location}}</p>
              </v-card-subtitle>
              <v-card-text class="text--primary">
                <p>Date start: {{n.dateStart.slice(0,10)}}</p>
                <p>Date finish: {{n.dateFinish.slice(0,10)}}</p>
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
  import { restElement } from '@babel/types';
  import API from '~/api';
  export default {
    data (){
      return {
        events: [
        ]
      }
    },
    methods:{
      async getAllEvents(){
        try {
          const res = await API.getAllEvents()
          this.events = res.data
        } catch (error) {
          console.log(error)
        }
      }
    }, beforeMount() {
        this.getAllEvents()
    }
  }
</script>

<style>

  .textBorder{
    text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0);
    color: #fff
  }
</style>
