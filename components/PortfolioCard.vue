<template lang="pug">
  .column.is-one-third
    .card
      .card-content
        span.icon.is-large
          ion-icon(size="large", :name="icon")
        h5.title.is-5 {{ title }}
        p {{ description }}
 </template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>

<style scoped lang="sass">
@import '~/assets/sass/variables.sass'

ion-icon
    color: $quaternary;

</style>
