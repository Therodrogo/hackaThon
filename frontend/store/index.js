import { defineStore } from "pinia";

//Store para el usuario Activo en el navbar
export const usuarioActivo = defineStore('usuario', {
    state: () => ({layout: '' , noLogueado: true}),
    getters: {
      
    },
    actions: {
        //Cambiar el nav cuando se loguea alguien
        CHANGE_NAV_LAYOUT(usuarioActivo, layout) {
            usuarioActivo.layout = layout;
            usuarioActivo.noLogueado = false;
        },
    },
  })


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        user:null,
        estado:null
    }),
    actions:{
        setUser(UserId){
            this.user = UserId
        },
        
    },
    getters:{
        getUserId(state){
            return state.user
        }
    }


  })

export const eventStore = defineStore('eventStore', {
    state: () => ({
        selectEvent:null,
        evento:null
    }),
    actions:{
        setEvent(eventId){
            this.selectEvent = eventId
        },
        
   
    },
    getters:{
        getEventId(state){
            return state.selectEvent
        }
        
    }
})


