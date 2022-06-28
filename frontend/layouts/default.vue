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
import FooterInformation from '~/components/FooterInformation.vue';
import events from '~/pages/events.vue';

export default {
    name: "DefaultLayout",
    components: { HeaderLanding, LoginWindow, FooterInformation },
    pages: {events},
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
<style>
  @font-face {
    font-family: JetBrains Mono-Medium;
    src: url(assets/fonts/webfonts/JetBrainsMono-Medium.woff2)
  }

  @font-face {
    font-family: JetBrains Mono-Bold;
    src: url(assets/fonts/webfonts/JetBrainsMono-Bold.woff2)
  }

  .defaultStyle{
      font-family: JetBrains Mono-Medium;
  }

  .app{
     font-family: JetBrains Mono-Medium;
     background-color: white;
     color: black;
  }

  *{
    font-family: JetBrains Mono-Medium;
  }

</style>
