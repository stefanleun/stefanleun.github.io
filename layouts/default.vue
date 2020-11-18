<template lang="pug">
  div
    Header.is-hidden-desktop
    .columns.is-gapless.fullheight
      .column.px-6.py-6.is-one-quarter.is-hidden-touch.sidebar-column
        Sidebar
      .column
        .main.px-6.py-6(
          v-bind:class="{ 'has-background-image' : showbg }"
        )
          Nuxt
</template>

<script>
import { disableStr } from '~/plugins/ga.js'

export default {
  computed: {
    showbg () {
     return this.$store.state.background.show 
    }
  },
  /* Google Analytics opt-out
  https://www.datenschutz.org/google-analytics-datenschutz/#schritt-4-optout-installieren
  */
  mounted () {
    if (document.cookie.indexOf(disableStr + '=true') > -1) {
      window[disableStr] = true;
    }
  },
}
</script>

<style lang="sass">
.fullheight
    min-height: 100vh;

.sidebar-column
    box-shadow: 0px 0px 30px rgba(0,0,0,0.09);

.main
    min-height: 100%;

.has-background-image
    background: url('~assets/image.png'), linear-gradient(rgba(39,101,145,1) 0%, rgba(54,58,70,1) 100%);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;

</style>
