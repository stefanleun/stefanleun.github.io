<template lang="pug">
  div
    Header.is-hidden-desktop
    .container
      .columns.is-gapless
        .column.is-one-quarter.is-hidden-touch
          Sidebar
        .column
          .main
            Nuxt
</template>

<style lang="sass">
@import '~/assets/sass/variables.sass'

.main
    height: 100%;
    padding: 50px;

</style>
