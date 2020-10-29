<template lang="pug">
  .timeline
    .timeline-item
      .timeline-marker.is-icon
        span.icon
          ion-icon(name="briefcase")
      .timeline-content
        p.has-text-weight-bold Senior Consultant bei EY Stuttgart
        p seit Januar 2017
        p Timeline content - Can include any HTML element
    .timeline-item
      .timeline-marker.is-icon
        span.icon
          ion-icon(name="library")
      .timeline-content
        p.has-text-weight-bold Universität Dresden
        p 2014 - 2016
        p Timeline content - Can include any HTML element
    .timeline-item
      .timeline-marker.is-icon
        span.icon
          ion-icon(name="library")
      .timeline-content
        p.heading March 2017
        p Timeline content - Can include any HTML element
</template>

<style scoped lang="sass">
@import '~/assets/sass/variables.sass'

ion-icon
    color: $secondary;

</style>