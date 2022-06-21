<template>
 <v-app class="app">
    <div class="defaultStyle">
     
      <HeaderLanding @loginAppear="showLogin"/>
      <v-divider></v-divider>
      
      <nuxt />
      <FutterInformation />
    </div>
  </v-app>
     
 
</template>

<script>
import HeaderLanding from '~/components/HeaderLanding.vue';
import LoginWindow from '~/components/LoginWindow.vue';
import FutterInformation from '~/components/FutterInformation.vue';

export default {
    name: "DefaultLayout",
    components: { HeaderLanding, LoginWindow, FutterInformation },
    data() {
      return {
        loginOn: false
      }
    },
    methods: {
      showLogin: function(){
                this.loginOn=true;
                console.log("aaaa")
      }
  },
}
</script>
<style scoped>
 
  .defaultStyle{
      font-family: Century Gothic;
  }

  .app{
     font-family: Century Gothic;
     background-color: white;
     color: black;
  }

</style>
