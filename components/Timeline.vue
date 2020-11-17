<template lang="pug">
  .timeline
    .timeline-item(v-for="item in items"
      :key="item.title"
    )
      .timeline-marker.is-icon
        span.icon
          ion-icon(:name="item.icon")
      .timeline-content
        p.title.is-5.timeline-title {{ item.title }}
        p
          | {{item.subtitle }}, 
          | {{ item.time }}
        p {{ item.descr }}
</template>

<script>
export default {
  props: {
    items: Object
  }
}
</script>

<style scoped lang="sass">
@import '~/assets/sass/variables.sass'

ion-icon
    color: $secondary;

.timeline-title
    margin-bottom: 0px;

</style>