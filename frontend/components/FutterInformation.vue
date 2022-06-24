<template>

  <v-footer v-bind="absolute" :padless="padless" >
    <v-card flat tile width="100%" class="grey darken-4 text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" color="white" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Hackathon UTALCA</strong>
      </v-card-text>
    </v-card>
  </v-footer>



</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
    
    ],  
    

    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {}
      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>