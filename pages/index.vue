<template lang="pug">
  .hero
    .hero-body 
      .container.has-text-centered
        figure.image.is-inline-block.sleun
          img.is-rounded(src="~/static/sleun.png")
        h1.title.has-text-light Herzlich Willkommen!
        p.is-size-5.has-text-light.description {{ description }}
</template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/true')
  },
  data: function () {
    return {
      description: data["Beschreibung"]
    }
  }
}
</script>


<style lang="sass">
@import "~/node_modules/bulma/sass/utilities/initial-variables.sass";
@import "~/node_modules/bulma/sass/utilities/derived-variables";
@import "~/node_modules/bulma/sass/utilities/mixins.sass";
.sleun
    width: 200px;
    padding-bottom: 20px;

.description
    +desktop
        padding-left: 150px;
        padding-right: 150px;

//Ich helfe Produktteams ihre Effizienz und Time to Market zu verbessern.
// Herzlich willkommen
// Als freiberufliche Beraterin erarbeite ich Lösungen in Bereichen Data Science, Machine Learning und Computer Vision.
// In the following, you will find some background information and summaries of my projects.
// I am a Stuttgart based management consultant at a leading consulting practice for financial services providing solutions for data analytics, AI modelling and the assessment of risks and regulatory requirements.

</style>
