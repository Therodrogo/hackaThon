import { defineStore } from "pinia";


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        user:null,
        estado:null,
    }),
    
    actions:{
        
    },
    getters:{
        getUserId(state){
            return state.user.data._id
        }
    },
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


