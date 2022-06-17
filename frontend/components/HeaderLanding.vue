<template>
<div>
    <div class="contenedor">
        <div @click="cerrarSesion" class="cerrarSesion" v-if="mostrarLogin && estadoMensaje">
          
        </div>
        <!-- <img  @click="mostrarIzquierda" class="menu" src="https://i.ibb.co/BBJKGTk/menu.png" alt=""  height="37">
         -->
        <img  class="logo" src="https://puropellet.cl/wp-content/uploads/2019/02/utalca-puropellet.png" alt=""  height="37">
       
        <button class="botoniniciar" small elevation="" @click="mostrar" >
            <img class="user" src="https://i.ibb.co/VLJ6CsC/user.png" alt="" width="40">
            
        </button>

           
   

        
    </div>
    

</div>

     
</template>

<script>

export default {
    components: {
  
},
    data(){
        return{
            test: {
                nombreusuario: "....",
                contraseña: ""
            },
            test1: false,
            test2:"",



        }
    },
    props:{
        
        menuEstudiante: Boolean,
        menuAdministrador: Boolean,
        posicionMono: String,
        
    },
    methods:{
       
            
           
    },
}
</script>

<style scoped>

.contenedor{
 
    width: auto;
    background-color: #00CCB1;
    height: 90px;
    color: aliceblue ;
}

.logo{
    margin-left: 15px;
    margin-top: 10px;
    position: relative;
    z-index: 7;
    height: 70px;
}

.botoniniciar{
    float: right;
    background: #313C75;
    position: relative;
    margin: 5px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: 0.5s;
    z-index: 6;
}

.botoniniciar:hover {

    background: #677EF5;
    transition: 0.5s;

}


ion-icon{
    position: absolute;
    margin: 0px 0 0 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: 0.5s;
}
ion-icon:hover{
    background: #677EF5;
}

</style>