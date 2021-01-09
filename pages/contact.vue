<template lang="pug">
  div
    div.hero.is-medium
      .hero-body
        .container.has-text-centered
          .columns
            .column.is-two-thirds.has-text-left
              h1.title Kontakt
              p.is-size-5.contact-text(v-html="contact")
              ContactLinks
            column.is-one-third
              figure.image.px-6.is-hidden-touch
                img(src="~/assets/contact_image.svg")
</template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      contact: data["Kontakt"]
    }
  }
}
</script>

<style lang="sass">
.contact-text
    margin-bottom: 24px
</style>