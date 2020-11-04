<template lang="pug">
  .timeline
    .timeline-item(v-for="item in items"
      :key="item.title"
    )
      .timeline-marker.is-icon
        span.icon
          ion-icon(:name="item.icon")
      .timeline-content
        p.has-text-weight-bold {{ item.title }}
        p {{ item.time }}
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

</style>