import { defineStore } from "pinia";


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
     user:null
    }),
    actions:{
        

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


