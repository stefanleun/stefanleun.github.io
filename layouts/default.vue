<template>
  <div class="columns">
    <div class="column is-3">
      <div id="app-logo">
        <img alt="Vue logo" src="@/assets/vegetables.svg">
        <h3>appetizer</h3>
      </div>
      <Sidebar/>
    </div>
    <div class="column is-9">
      <div id="main">
        <Nuxt />
      </div>
    </div>
  </div>
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
