<template lang="pug">
  .column.is-one-third
    table.table.is-narrow.is-fullwidth
      thead
        th.has-text-left(colspan="2") 
          h5.title.is-5 {{ title }}
      tbody 
        tr(
          v-for="(rating, skill) in skills"
          :key="skill"
        )
          td {{ skill }}
          td(v-if="typeof(rating)=='number'")
            ion-icon(size="small", name="ellipse", v-for="n in rating", :key="rating")
            ion-icon(size="small", name="ellipse-outline", v-for="n in 3-rating", :key="rating")
          td(v-else) {{ rating }}
</template>

<script>
export default {
  props: {
    skills: Object,
    title: String,
  }
}
</script>

<style scoped lang="sass">
@import '~/assets/sass/variables.sass'

ion-icon
    color: $secondary

</style>
