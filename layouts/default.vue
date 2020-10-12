<template lang="pug">
  div
    Header.is-hidden-desktop
    .columns.is-gapless.fullheight
      .column.px-6.py-6.is-one-quarter.is-hidden-touch
        Sidebar
      .column
        .main.px-6.py-6.has-background-light(
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
@import '~/assets/sass/variables.sass'

.fullheight
    height: 100vh;

//56

.main
    min-height: 100%;

.has-background-image
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('~assets/background_color.png') no-repeat center;
    background-size: cover;

</style>
