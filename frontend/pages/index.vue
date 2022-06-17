<template>
  <div>
    <HeaderLanding />
    <BodyLanding />
    <BodyInformation />

  </div>
 
</template>

<script>
import HeaderLanding from '@/components/HeaderLanding.vue';
import BodyLanding from '@/components/BodyLanding.vue';
import BodyInformation from '@/components/BodyInformation.vue';

undefined
export default {
    name: "IndexPage",
    component: {
        HeaderLanding,
        BodyLanding,
        BodyInformation
    },
    components: { HeaderLanding, BodyLanding, BodyInformation }
}
</script>
