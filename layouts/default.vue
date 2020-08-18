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

//
// #app
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;

.main
    height: 100%;
    padding: 20px;

// $app-logo-width: 50px;

//#app-logo
//    color: $green;
//     padding: 20px;
//     img
//         width:   $app-logo-width
</style>
