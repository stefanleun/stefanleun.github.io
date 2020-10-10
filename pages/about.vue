<template lang="pug">
  div 
    h3.title About
    h5.title.is-5 Kurzbeschreibung

    .columns 
      .column.is-one-third 
        figure.image.is-inline-block.sleun
          img.is-rounded(src="~/static/sleun.png")
      .column {{ description }}

    ul.details
      li Data Scientist und Unternehmensberater
      li 
        span.has-text-weight-bold Akademischer Grad: 
        | M.Sc. Physik
      li 
        span.has-text-weight-bold Standort: 
        | Stuttgart
      li 
        span.has-text-weight-bold Kontakt: 
        | Kontakt-Link

    h5.title.is-5 Skills 

    .columns.is-multiline
      Skills(
        v-for="(skills, title) in skillset"
        :skills="skills"
        :title="title"
        :key="title"
      )
      .column Legende - TODO
    h5.title.is-5 Werdegang

    h5.title.is-5 Education
    h5.title.is-5 Experience
    h5.title.is-5 Weiterbildung / Online Courses

    h5.title.is-5 Publikationen

</template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      skillset: data["Skillset"],
      description: data["Kurzbeschreibung"]
    }
  }
}
</script>

<style lang="sass">
.details
    display: inline-block;
    width: 100%

    li 
        float: left;
        width: 50%;
        margin-bottom: 10px;
</style>