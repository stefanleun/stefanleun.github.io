<template lang="pug">
  div
    h1.title Color Palette

    .box.primary-box
      article.media
        .media-content
          .content
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.

    .box.secondary-box
      article.media
        .media-content
          .content
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.

    .box.tertiary-box
      article.media
        .media-content
          .content
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.

    .box.quaternary-box
      article.media
        .media-content
          .content
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
</template>

<style lang="sass">
@import '~/assets/sass/variables.sass'

.primary-box
    background-color: $primary;
    color: white;

.secondary-box
    background-color: $secondary;

.tertiary-box
    background-color: $tertiary;

.quaternary-box
    background-color: $quaternary;

</style>