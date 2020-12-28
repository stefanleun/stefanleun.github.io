<template lang="pug">
  .tile.is-4.is-parent
    .tile.is-child.box
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
    color: $secondary

</style>
