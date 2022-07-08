<template>
   
  <v-container class="fill-height">
    
    <v-row>
        <v-text-field
            label="Regular"
        ></v-text-field>
    </v-row>
    <v-row>
        <v-text-field
            v-model="Tittle"
            label="Título"
            :rules="TittleRules"
            :counter="20"
            required
        ></v-text-field>
    </v-row>
    <v-row>
          <v-textarea
            autocomplete="Descripción"
            label="Descripción"
            v-model="Description"
            :rules="DescriptionRules"
            :counter="300"
            required
          ></v-textarea>
    </v-row>    
    <v-row>
            <v-text-field
              label="ImagenURL"           
              v-model="ImageURL"
              :rules="ImageURLRules"
              
              
            ></v-text-field>
            <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            @click="createPost"
            >
            <v-icon color = "#00CCB1">
                mdi-arrow-left-drop-circle
            </v-icon>
            </v-btn>
        </v-row>
          
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
          v => v.length>=10 && v.length <= 20 || 'El titulo debe tener entre 10 y 20 caracteres',
        ],
        Description:"",
        DescriptionRules:[
           v => !!v || 'Una descripcion es requerida',
           v => v.length>=50 && v.length <= 300 || 'La descripción debe tener como minimo 50 caracteres',
        ],
        ImageURL:"",
        ImageURLRules:[
           v => !!v || 'Una imagen es requerida',
           v => /.png/.test(v) || /.jpg/.test(v) || 'La URL debe finalizar en "jpg" o "png"',
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
      
        
        if((this.Tittle.length>=10 && this.Tittle.length <= 20) && (this.Description.length>=50 && this.Description.length <= 300) && formatvalid){
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