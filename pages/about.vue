<template lang="pug">
  div 
    h1.title About
    h3.title.is-3 Kurzbeschreibung

    p Text Lorem Ipsum Tralala

    p Data Scientist und Unternehmensberater
    p Akademischer Grad: M.Sc. Physik
    p Standort: Stuttgart
    p Kontakt: Kontakt-Link

    h3.title.is-3 Skills 

    .columns.is-multiline
      Skills(
        v-for="(skills, title) in skillset"
        :skills="skills"
        :title="title"
        :key="title"
      )
      .column Legende - TODO
    h3.title.is-3 Werdegang

    h4.title.is-4 Education
    h4.title.is-4 Experience
    h3.title.is-3 Weiterbildung / Online Courses

    h3.subtitle Publikationen

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
