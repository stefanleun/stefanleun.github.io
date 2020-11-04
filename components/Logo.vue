<template lang="pug">
  div.logo
    div
      h1.title.is-2.is-size-4-touch.stefan stefan
      h1.title.is-1.is-size-3-touch.leun leun
    div
      h5.subtitle.mysubtitle.is-hidden-touch DATA SCIENTIST // CONSULTANT
</template>

<style lang="sass">
@import "~/node_modules/bulma/sass/utilities/initial-variables.sass";
@import "~/node_modules/bulma/sass/utilities/derived-variables";
@import "~/node_modules/bulma/sass/utilities/mixins.sass";
@import '~/assets/sass/variables.sass'

.logo
    padding: 0.5em 0.75em;
    +touch
      padding: 0em 0em;

.stefan
    display: inline;
    font-family: $family-sans-serif;
    font-weight: 400;
    color: $grey;

//56

.leun
    display: inline;
    font-family: $family-serif;
    font-weight: 600;
    color: $primary;

.mysubtitle
    font-size: 0.93rem;
    font-family: $family-serif;

</style>


