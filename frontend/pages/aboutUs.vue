<template>
   <div class="py-16 grey lighten-4" xs6> 
    <v-row class="text-center">
      <v-col><h2 class="text-h4 text-sm-h3 text-capitalize font-weight-black mb-4"> Conoce al equipo </h2>
      </v-col>
    </v-row>
   <v-layout >
    <v-row class="container text-center container--fluid">
      <v-col>
         <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
          <div class="text-center">
            <v-avatar size="120" >
            <img
            src="data:image/jpeg;base64,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"
            >
            </v-avatar>
          </div>
          <v-card-text class="card">
          <p class="text-h5 text-uppercase font-weight-black mt-6 mb-2" >
            Daniel Moreno
          </p>
          <p class="text--disabled text-uppercase">Profesor</p>
        </v-card-text>
       </v-flex >
      </v-col>
       <!-- 2 -->
       <v-col>
        <v-flex class="py-12 px-6 v-sheet v-sheet--outlined v-sheet--shaped theme--light">
          <div class="text-center">
            <v-avatar size="120" >
            <img
            src="http://icc.utalca.cl/imagenes/equipo_icc/academicos/ruth_garrido.jpg"
            >
            </v-avatar>
          </div>
          <v-card-text class="card">
           <p class="text-h5 text-uppercase font-weight-black mt-6 mb-2" >
            Ruth Garrido
          </p>
          <p class="text--disabled text-uppercase">Jefa de carrera</p>
        </v-card-text>
        </v-flex >
       </v-col>
    </v-row>
   </v-layout>
       <!-- Informacion adicional 1 -->
    <v-row class="py-16">
    </v-row>
   <v-layout>
 
    <v-row class="text-center">
      <v-col id="ImageContainer">
         <img
            src="https://images5.alphacoders.com/695/695931.jpg"
            >
      </v-col>
      <v-col class="pa-lg-16 pa-md-10 px-4 py-16">
          <p class="text-h3 text-center font-weight-black" >
            ¿Qué es una hackathon? 
          </p>
          <p>
            Un hackaton es un encuentro de programadores en el que se busca, a través de su trabajo colaborativo,
            dar una respuesta a un reto o problema técnico de una organización en tiempo récord. Esta respuesta 
            será una solución en forma de prototipo terminado para un producto, servicio o modelo de negocio innovador.
          </p>
      </v-col>
    </v-row> 
   </v-layout>
           <!-- Informacion adicional -->
    <v-row class="py-16">
    </v-row>
    <v-layout>
    <v-row class="text-center">
      <v-col class="pa-lg-16 pa-md-10 px-4 py-16">
          <p class="text-h3 text-center font-weight-black" >
          ¿Cómo se desarrolla una hackathon?
          </p>
          <p>
            Se arman equipos de trabajo integrados por lo general entre 3 a 5 personas de distintas especialidades como analistas de datos,
             comunicadores, diseñadores, para que exista una diversidad de opiniones y perspectivas. 

            Luego instalan sus materiales de trabajo en una zona común, ya que deben estar en constante comunicación y, finalmente, empiezan 
            con el desarrollo de la solución. 

            El tiempo es muy variable, pueden durar 36 horas o varias semanas, dependiendo de la complejidad y necesidad de los resultados.
          </p>
      </v-col>
      <v-col>
         <img
            src="https://www.bbva.com/wp-content/uploads/2018/09/Hackathon18_4-1024x682.jpg"
            >
      </v-col>
    </v-row> 
   </v-layout>
 <!-- Titulo 2 -->
    <v-row class="py-16">
    </v-row>
    <v-row class="text-center">
      <v-col><h2 class="text-h4 text-sm-h3 text-capitalize font-weight-black mb-4"> Trayectoria </h2>
      </v-col>
    </v-row>

    <!-- TimeLine -->
    <v-layout  class="container text-center container--fluid">
        <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Competencia 
            </h2>
            
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-layout>

  </div> 
</template>

<script>
 export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2018',
        },
        {
          color: 'green',
          year: '2019',
        },
        {
          color: 'pink',
          year: '2020',
        },
        {
          color: 'amber',
          year: '2021',
        },
        {
          color: 'orange',
          year: '2022',
        },
      ],
    }),
  }
</script>

<style scoped>

.v-container{
  width: 100%;
}
img{
    width:100%;
    max-width:600px;
}
.card{
  text-align: center;
}

</style>
