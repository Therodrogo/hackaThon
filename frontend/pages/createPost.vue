<template>
   
  <v-container class="fill-height">
    
    <v-row>
        <v-text-field
            label="Regular"
          ></v-text-field>
    </v-row>
    <v-row>
        <v-text-field
            label="Título"
          ></v-text-field>
    </v-row>
    <v-row>
        <v-container fluid>
    <v-textarea
      autocomplete="Descripción"
      label="Descripción"
    ></v-textarea>
  </v-container>
    </v-row>    
    <v-row>
            <v-file-input
                label="File input"
               
                prepend-icon="mdi-camera"
            >
            </v-file-input>
            <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            >
            <v-icon color = "#00CCB1">
                mdi-arrow-left-drop-circle
            </v-icon>
            </v-btn>
        </v-row>
          
  </v-container>
  
</template>

<script>
  export default {
    data () {
      return {
        selected: ['Trevor Handsen'],
        items: ['Trevor Handsen', 'Alex Nelson'],
        title: " "
      }
    },
  }
</script>

<style>

</style>