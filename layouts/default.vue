<template lang="pug">
  div
    Header.is-hidden-desktop
    .container
      .columns.is-gapless.fullheight
        .column.is-one-quarter.is-hidden-touch
          Sidebar
        .column.has-background-light
          .main
            Nuxt
</template>

<style lang="sass">
@import '~/assets/sass/variables.sass'

.fullheight
    height: 100vh;

.main
    height: 100%;
    padding: 50px;

</style>
