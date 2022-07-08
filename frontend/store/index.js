import { defineStore } from "pinia";
import Swal from 'sweetalert2';
import { useLocalStorage } from "@vueuse/core";
//Store para el usuario Activo en el navbar
export const usuarioActivo = defineStore('usuario', {
    state: () => ({
      layout: useLocalStorage('layout', true) , 
      noLogueado: useLocalStorage('noLogueado', null)}),
    getters: {

    },
    actions: {
        //Cambiar el nav cuando se loguea alguien
        CHANGE_NAV_LAYOUT(usuarioActivo, layout) {
            usuarioActivo.layout = layout;
            usuarioActivo.noLogueado = false;
        },
        CHANGE_NAV_LAYOUT_LOGOUT() {
            this.layout = true;
            this.noLogueado = true;
        }
    },
  })


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        id: useLocalStorage('id', ''),
        status: useLocalStorage('status', ''),
    }),

    actions:{
        async login(email, password){
            const userSignUp = await API.signUpUser({"mail": email,"password":password});
          if (typeof userSignUp === 'undefined') {
            return false;
          }else{
            if (userSignUp.code==200){
              this.id = JSON.stringify(userSignUp.data._id);
              this.status = "active";
              Swal.fire({
                    title: "Bienvenido "+ userSignUp.data.name,
                    text: "Tu rol es: "+ userSignUp.data.role,
                    icon: "success",
                    confirmButtonColor: '#00CCB1'
                   }).then((result) => {
                      if (result.isConfirmed) {
                        return true;
                      }
                  });
            }
          }
        },
        getUserId(){
            console.log(this.id);
            return this.id;
        },
        getStatus(){
          return this.status;
        },
        setUser(userID){
          this.id = userID;
        },
        setStatus(status){
          this.status = status;
        },
        logout(){
          localStorage.clear();
        }
    },
    getters:{

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


