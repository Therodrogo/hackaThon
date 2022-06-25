<template>
  <v-container :style="isShowError ? 'border-radius: 0px;' : 'border: 2px solid #84848d;'">

    <v-row v-for="event in events" :key="event">

      <v-col cols="12" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
          max-height="400"
              class="grey darken-4"
          :src = "event.coverURL"
        ></v-img>
        </v-card>
      </v-col>
      <v-col cols="6"  >
        <v-card :style="isShowError ? 'border-radius: 0px;' : 'border: 1px solid #84848d;'"
          class="pa-2"
          outlined
          tile
          color = "#DAE8FC"

        >
          Nombre del evento: {{event.name}}
          <br>
          Direccion del evento: {{event.location}}
          <br>
          Fecha inicio: {{event.dateStart}}
          <br>
          Fecha termino: {{event.dateFinish}}
          <br>
          Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
          <br>

        <v-row
        >

          <v-col >
            <v-btn
            rounded
            elevation="2"
            color = "#00CCB1"
            >
            Crear Grupo
            </v-btn>
          </v-col>

          <v-col cols="6" >
            <v-btn
            rounded
            elevation="3"
            color = "#00CCB1"
            >
            Ver lista de Grupos
            </v-btn>

          </v-col>
        </v-row>

        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card :style="isShowError ? 'border-radius: 0px;' : 'border: 1px solid #84848d;'"
          class="pa-2"
          outlined
          tile
          color = "#DAE8FC"
        >
          Descripcion:
          <br>
          <p>
          {{event.description}}

          </p>

        </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
  .v-card {
    padding:10px;
    text-align:center ;
  }

</style>

<script>
  export default {
    data (){
      return {
        events: [
          {name: "hackaton ucm", dateStart: "24 de julio, 2023", dateFinish: "31 de marzo, 2024", location: "Talca", coverURL: "https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/663-1.jpg",
          description: "Este evento será el evento del año para los programadores Lorem ipsum dolor sit amet consectetur y aqui voy a escribir cualaquier cosa"}
        
        
        ]
      }
    }
  }
</script>
