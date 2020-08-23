<template lang="pug">
  div
    Header.is-hidden-desktop
    .container
      .columns.is-gapless.fullheight
        .column.is-one-quarter.is-hidden-touch
          Sidebar
        .column
          .main.px-5.py-5.has-background-light
            Nuxt
</template>

<style lang="sass">
@import '~/assets/sass/variables.sass'

.fullheight
    height: 100vh;

.main
    min-height: 100%;

</style>
