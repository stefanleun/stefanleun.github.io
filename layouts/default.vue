<template lang="pug">
  div
    Header.is-hidden-desktop
    .columns.is-gapless.fullheight
      .column.px-6.py-6.is-one-quarter.is-hidden-touch.sidebar-column
        Sidebar
      .column
        .main(
          v-bind:class="{ 'has-background-image' : showbg }"
        )
          Nuxt
</template>

<script>
export default {
  computed: {
    showbg () {
     return this.$store.state.background.show 
    }
  }
}
</script>

<style lang="sass">
@import "~/node_modules/bulma/sass/utilities/_all"

.fullheight
    min-height: 100vh

.sidebar-column
    box-shadow: 0px 0px 30px rgba(0,0,0,0.09)

.main
    min-height: 100%
    padding: 3rem 3rem
    +touch
        padding: 1.0rem 1.0rem

.has-background-image
    background: url('~assets/image.png'), linear-gradient(rgba(39,101,145,1) 0%, rgba(54,58,70,1) 100%)
    background-repeat: no-repeat
    background-position: bottom center
    background-size: contain

</style>
