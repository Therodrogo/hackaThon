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
        CHANGE_NAV_LAYOUT_LOGOUT(usuarioActivo) {
            usuarioActivo.layout = '';
            usuarioActivo.noLogueado = true;
        }
    },
  })


export const usuarioStore = defineStore('usuarioStore', {
    state: () => ({
        id: null,
        status: null,
    }),

    actions:{
        async login(email, password){
            const userSignUp = await API.signUpUser({"mail": email,"password":password});
          if (typeof userSignUp === 'undefined') {
            return false;
          }else{
            if (userSignUp.code==200){
              this.status = 'active';
              this.id = JSON.stringify(userSignUp.data._id);
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


