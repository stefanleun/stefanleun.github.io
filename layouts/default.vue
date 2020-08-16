<template lang="pug">
  .columns
    .column.is-3
      #app-logo
        img(alt="Vue logo", src="@/assets/vegetables.svg")
        h3 stefanleun
      Sidebar
    .column.is-9
      .main
        Nuxt
</template>

<style lang="sass">
@import './assets/sass/variables.sass'

#app
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

#main
    border: 0px solid red;
    padding: 20px;

$app-logo-width: 50px;

#app-logo
    text-align:  center;
    color:       $green;
    padding-top: 20px;
    img
        width:   $app-logo-width
</style>
