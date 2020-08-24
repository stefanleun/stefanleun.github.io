<template lang="pug">
  div
    Header.is-hidden-desktop
    .container
      .columns.is-gapless.fullheight
        .column.is-one-quarter.is-hidden-touch
          Sidebar
        .column
          .main.px-6.py-6.has-background-primary
            Nuxt
</template>

<style lang="sass">
@import '~/assets/sass/variables.sass'

.fullheight
    height: 100vh;

.main
    min-height: 100%;
    background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('~assets/background.png');

</style>
