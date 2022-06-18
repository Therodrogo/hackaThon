<template>
 <v-app class="app">
  <div>
    <HeaderLanding />
    <BodyLanding />
    <BodyInformation />
    <FutterInformation />
  </div>
</v-app>
</template>

<script>
import HeaderLanding from '@/components/HeaderLanding.vue';
import BodyLanding from '@/components/BodyLanding.vue';
import BodyInformation from '@/components/BodyInformation.vue';
import FutterInformation from '~/components/FutterInformation.vue';


undefined
export default {
    name: "IndexPage",
    component: {
        HeaderLanding,
        BodyLanding,
        BodyInformation,
        FutterInformation
    },
    components: { HeaderLanding, BodyLanding, BodyInformation, FutterInformation }
}
</script>
<style scoped>
  .app{
     font-family: Century Gothic;
     background-color: white;
  }
</style>
