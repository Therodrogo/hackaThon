import { defineStore } from "pinia";
import { useLocalStorage} from "@vueuse/core";
import { mdiFlaskEmptyMinusOutline } from "@mdi/js";


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        id: useLocalStorage('id', ''),
        status: useLocalStorage('status', ''),
        name: useLocalStorage('name', ''),
        role: useLocalStorage('role','')
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
          this.role=''
        },
        setRole(UserRole){
          this.role=UserRole;
        }
    },

    getters:{
      getUserId(state){
        return state.id;
      },
      getName(state){
        return state.name;
      },
      getStatus(state){
        return state.status==='active';
      },
      getUserRole(state){
        return state.role;
      }
     
    },
  })

export const eventStore = defineStore('eventStore', {
    state: () => ({
        selectEvent: useLocalStorage('selectEvent', ''),
        evento: useLocalStorage('evento', '')
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

export const groupStore = defineStore('groupStore', {
  state: () => ({
      groupID: useLocalStorage('groupID', ''),
  }),
  actions:{
      setGroupID(id){
          this.groupID = id
      },
  },
  getters:{
      getGroupIDId(state){
          return state.groupID
      }

  }
})

export const newsStore = defineStore('newsStore', {
  state: () => ({
      selectNews: useLocalStorage('selectNews', ''),
  }),
  actions:{
      setNews(newsID){
          this.selectNews = newsID      
      },
  },
  getters:{
      getNewId(state){
          return state.selectNews
      }

  }
})


