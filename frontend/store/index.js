import { defineStore } from "pinia";
import API from "../api";
import Swal from 'sweetalert2';

export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        id: JSON.parse(localStorage.getItem('id')),
        status: localStorage.getItem('status'),
        layout: localStorage.getItem('layout'),
    }),

    actions:{
        async login(email, password){
            const userSignUp = await API.signUpUser({"mail": email,"password":password});
          if (typeof userSignUp === 'undefined') {
            return false;
          }else{
            if (userSignUp.code==200){
              localStorage.setItem('status',"active");
              localStorage.setItem('id', JSON.stringify(userSignUp.data._id));
              localStorage.setItem('layout', userSignUp.data.name);
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
            return this.id;
        },
        getStatus(){
          return this.status;
        },
        logout(){
          localStorage.clear();
        },
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


