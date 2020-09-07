<template lang="pug">
  div 
    h3.title About
    h5.title.is-5 Kurzbeschreibung

    .columns 
      .column.is-one-third 
        figure.image.is-inline-block.sleun
          img.is-rounded(src="~/static/sleun.png")
      .column Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.

    p Text Lorem Ipsum Tralala

    p Data Scientist und Unternehmensberater
    p Akademischer Grad: M.Sc. Physik
    p Standort: Stuttgart
    p Kontakt: Kontakt-Link

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
export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      skillset: {
        Sprachen: {
          Deutsch: "Muttersprache",
          Englisch: "Verhandlungssicher",
          Französisch: "Grundkenntnisse"
        },
        Programmiersprachen: {
          Python: 3,
          "C++": 2,
          Java: 1,
        },
        Bibliotheken: {
          Django: 3,
          Pandas: 3,
          Numpy: 3,
          SciPy: 3,
          Matplotlib: 3,
          "scikit-learn": 2
        },
        Tools: {
          git: 3,
          Jupyter: 3,
          docker: 2,
          Unix: 3,
          SQL: 3
        }
      }
    }
  }
}
</script>
