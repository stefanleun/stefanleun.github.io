<template lang="pug">
  div
    a(href="mailto:stefan211.so@googlemail.com").contact-link
      span.icon.contact-icon
        ion-icon(size="large", name="mail")
    a(href="https://www.linkedin.com/in/stefanleun", target="_blank", rel="noopener noreferrer").contact-link
      span.icon.contact-icon
        ion-icon(size="large", name="logo-linkedin")
    a(href="https://www.xing.com/profile/Stefan_Leun/", target="_blank", rel="noopener noreferrer").contact-link
      span.icon.contact-icon
        ion-icon(size="large", name="logo-xing")
    a(href="https://github.com/stefanleun", target="_blank", rel="noopener noreferrer").contact-link
      span.icon.contact-icon
        ion-icon(size="large", name="logo-github")
</template>

<style scoped lang="sass">
@import "~/node_modules/bulma/sass/utilities/initial-variables.sass";
@import "~/node_modules/bulma/sass/utilities/derived-variables";
@import "~/node_modules/bulma/sass/utilities/mixins.sass";
@import "~/node_modules/bulma/sass/elements/icon.sass";
@import '~/assets/sass/variables.sass'

span.icon.contact-icon
  @extend .is-large
  +touch
    height: 1.8rem;
  color: $primary;
</style>