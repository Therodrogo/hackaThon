<template>
  <v-container :style="isShowError ? 'border-radius: 0px;' : 'border: 3px solid black;'">
    <v-row >
      <v-col cols="12" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
          max-height="400"
              class="grey darken-4"
          src="https://image.shutterstock.com/image-vector/hackathon-concept-icon-set-big-260nw-2019732209.jpg"
        ></v-img>
        </v-card>
      </v-col>
      <v-col cols="6" >
        <div
          class="pa-2"
          outlined
          tile
        >
          Nombre del evento: hackathon 2022
          <br>
          Direccion del evento: utalca?
          <br>
          Fecha inicio: 
          <br>
          Fecha termino:
          <br>
          Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
          <br>


          <div>
            <v-container class="my-5">

              <v-btn 
            elevation="2"
            x-large
            >
            Crear Grupo
            </v-btn>
          
            <v-btn
            elevation="3"
            x-large
            >
            Ver lista de Grupos
            </v-btn>

            </v-container>
            

          </div>

        </div>
      </v-col>
      <v-col cols="6">
        <div
         
        >
          Descripcion: 
          <br>
          <p>
          Este evento será el evento del año para los programadores Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Corrupti modi aperiam quaerat vero animi. Recusandae id alias ea necessitatibus odit 
          velit facere quisquam. Non consequatur in suscipit repellendus, illo a! Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Sunt quidem minus totam praesentium, voluptas rerum ducimus et aut veritatis. 
          Minus mollitia nobis odio excepturi. Earum asperiores modi explicabo necessitatibus facere.
          
          </p>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      const spacers = Array.from({ length: 17 }, (val, i) => `${i}`)
      const nspacers = Array.from({ length: 16 }, (val, i) => `n${i + 1}`)
      const defaults = ['auto', ...spacers]

      return {
        directions: ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a'],
        marginDirection: 'a',
        marginSize: '2',
        marginSizes: [...defaults, ...nspacers],
        paddingDirection: 'a',
        paddingSize: '6',
        paddingSizes: defaults,
        playgroundText: 'Use the controls above to try out the different spacing helpers.',
      }
    },

    computed: {
      computedPadding () {
        return `p${this.paddingDirection}-${this.paddingSize}`
      },
      computedMargin () {
        return `m${this.marginDirection}-${this.marginSize}`
      },
    },
  }
</script>


<script>
  export default {
    data: () => ({
      model: 3,
      rounded: [
        '0',
        'sm',
        'md',
        'lg',
        'xl',
        'pill',
        'circle',
      ],
    }),

    computed: {
      radius () {
        let rounded = 'rounded'
        const value = this.rounded[this.model]

        if (value !== 'md') {
          rounded += `-${value}`
        }

        return rounded
      },
    },
  }
</script>