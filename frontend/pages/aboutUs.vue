<template>
  <div>
     <v-card-title class="text-center justify-center py-6"> <!-- Cambiar letra, dar estilos-->
      <h1 class="font-weight-bold text-h2 basil--text">
        Conoce al Team!
      </h1>
    </v-card-title>

    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 320px;"
      ><!-- Aquí repite el ciclo para cada grid -->
        <v-col
          v-for="n in 3"
          :key="n"
        >

      <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title>
        Top western road trips
      </v-card-title>

      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- Script del ciclo temporal para cada -->
<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>

<style>



</style>