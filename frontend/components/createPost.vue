<template> 

  <v-container class="fill-height">

    <v-row>
      <v-text-field
        v-model="Tittle"
        label="Título"
        :rules="TittleRules"
        :counter="100"
        required
        prepend-icon="mdi-pencil"
      ></v-text-field>
    </v-row>

    <v-row>
      <v-textarea
        autocomplete="Descripción"
        label="Descripción"
        v-model="Description"
        prepend-icon="mdi-comment-text-outline"
        :rules="DescriptionRules"
        :counter="1000"
        required
      ></v-textarea>
    </v-row>   

    <v-row>
      <v-text-field
        label="ImagenURL"           
        v-model="ImageURL"
        :rules="ImageURLRules"
        prepend-icon="mdi-file-image"
      ></v-text-field> 
    </v-row>

    <v-col align="center">
      <v-btn
        rounded elevation="2" 
        color = "#00CCB1"
        @click="createPost"
        >CREAR ANUNCIO
      </v-btn>
    </v-col>   

  </v-container> 
 
</template>

<script>
import API from '../api'
import swal from 'sweetalert'
  export default {
    data () {
      return {
        Tittle:"",
        TittleRules:[
          v => !!v || 'Un titulo es necesario',
          v => v.length>=4 && v.length <= 100 || 'El titulo debe tener entre 4 y 100 caracteres',
        ],
        Description:"",
        DescriptionRules:[
           v => !!v || 'Una descripcion es requerida',
           v => v.length>=50 && v.length <= 1000 || 'La descripción debe tener como minimo 50 caracteres',
        ],
        ImageURL:"",
        ImageURLRules:[
           v => !!v || 'Una imagen es requerida',
           v => /.+.png/.test(v) || /.+.jpg/.test(v) || 'La URL debe finalizar en "jpg" o "png"',
        ],
        
             
      }
    },methods: {
      async createPost(){
        var formatvalid=false
        
        try{
          if(this.ImageURL.length>0){
            formatvalid =  /.png/.test(this.ImageURL) || /.jpg/.test(this.ImageURL) 
          }
          console.log(formatvalid)
      
        
        if((this.Tittle.length>=4 && this.Tittle.length <= 100) && (this.Description.length>=50 && this.Description.length <= 1000) && formatvalid){
            const res = await API.postPost(
              {
                "title":this.Tittle ,
                "description": this.Description,
                "imageUrl":this.ImageURL
              })
              const hora = res.data.date.split("T")
              swal({
                  title: "El post se ha creado exitosamente",
                  text: "Fecha de subida: "+hora[0],
                  icon: "success",
                })
              console.log(res.data)
        }else{
          swal({
                title: "Los datos no han sido ingresados correctamente",
                icon: "error",
          });
        }  
        }catch(error){
          console.log(error)  
        }
      }
    },
  }
</script>

<style>

</style>