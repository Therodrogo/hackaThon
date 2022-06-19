<template>
<button v-on:click="counter += 1">
  <v-card 
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://image.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
    ></v-img>

    <v-card-title class="d-flex justify-center">
      HackaThon
      </v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        HackaThon 2022
      </div>
      <div>La best HackaThon ever creada en la vida.</div>
    </v-card-text>
    
    <v-card-actions>
    </v-card-actions>
  </v-card>
  </button>

  
</template>