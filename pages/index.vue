<template lang="pug">
  .hero
    .hero-body 
      .container.has-text-centered
        figure.image.is-inline-block.sleun
          img.is-rounded(src="~/assets/sleun.png")
        h1.title.has-text-light Herzlich Willkommen!
        p.is-size-5.has-text-light.description(v-html="description")
</template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/true')
  },
  data: function () {
    return {
      description: data["Kurzbeschreibung"]
    }
  }
}
</script>


<style lang="sass">
@import "~/node_modules/bulma/sass/utilities/_all"
@import "~/assets/sass/variables"

.sleun
    width: 200px
    padding-bottom: 20px

.description
    +desktop
        padding-left: 140px
        padding-right: 140px
    a
        color: $white-ter
    a:hover
        color: $link-hover

</style>
