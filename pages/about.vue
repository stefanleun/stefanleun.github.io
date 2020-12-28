<template lang="pug">
  div 
    h3.title.is-3 About

    .columns.is-variable.is-8.is-vcentered
      .column.is-one-third
        figure.image.sleun-about
          img.is-rounded(src="~/assets/sleun.png")
      .column(v-html="description")
        .details-div
          ul.details
            li
              span.title.is-5 Akademischer Grad: 
              | {{ degree }}
            li
              span.title.is-5 Standort: 
              | {{ location }}
          a.button.is-info.is-outlined(href="/contact") Kontakt

    .columns.is-multiline.py-5
      Skills(
        v-for="(skills, title) in skillset"
        :skills="skills"
        :title="title"
        :key="title"
      )

    .columns.is-multiline
      .column.is-half
        h5.title.is-5 Berufserfahrung
        Timeline(
          :items="experience"
        )
      .column.is-half
        h5.title.is-5 Studium
        Timeline(
          :items="education"
        )

    //- h5.title.is-5 Weiterbildung / Online Courses
    //- h5.title.is-5 Publikationen

</template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      description: data["Beschreibung"],
      location: data["Standort"],
      degree: data["Grad"],
      skillset: data["Skillset"],
      education: data["Education"],
      experience: data["Experience"]
    }
  }
}
</script>

<style lang="sass">
@import "~/node_modules/bulma/sass/utilities/_all"

.sleun-about
    width: 75%
    max-width: 250px
    display: block
    margin-left: auto
    margin-right: auto

.details-div
    margin-top: 15px

.details
    display: inline-block
    float: left
    width: 50%
    +touch
      width: 100%

    li 
      margin-bottom: 10px

</style>