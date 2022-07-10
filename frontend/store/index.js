import { defineStore } from "pinia";
import { useLocalStorage} from "@vueuse/core";

export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        id: useLocalStorage('id', ''),
        status: useLocalStorage('status', ''),
        name: useLocalStorage('name', ''),
    }),

    actions:{
        setUser(userID){
          this.id = userID;
        },
        setName(nameUser){
          this.name=nameUser;
        },
        setStatus(statusUser){
          this.status = statusUser;
        },
        logout(){
          this.id=''
          this.name=''
          this.status=''
        }
    },

    getters:{
      getUserId(state){
        console.log(this.id);
        return state.id;
      },
      getName(state){
        return state.name;
      },
      getStatus(state){
        return state.status==='active';
      },
     
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


