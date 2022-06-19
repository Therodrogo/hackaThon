<template>

    <div>
        <BodyLanding />
        <BodyInformation />
        <FutterInformation />
    </div>

</template>

<script>
import BodyLanding from '@/components/BodyLanding.vue';
import BodyInformation from '@/components/BodyInformation.vue';
import FutterInformation from '~/components/FutterInformation.vue';


undefined
export default {
    name: "IndexPage",
    component: {
        BodyLanding,
        BodyInformation,
        FutterInformation
    },

}
</script>

