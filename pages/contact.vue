<template lang="pug">
  div 
    h1.title Kontakt
    table.table
      tbody
        tr
          th.title.is-5 Name
          td Stefan Leun
        tr
          th.title.is-5 Beruf
          td Unternehmensberater
        tr
          th.title.is-5 Schwerpunkte
          td
            | Data Science
            br
            | Machine Learning
            br
            | Web Development
        tr
          th.title.is-5 Standort
          td Stuttgart
        tr
          th.title.is-5 Akademischer Grad
          td M.Sc. Physik
        tr
          th.title.is-5 Web
          td
            a(href="https://stefanleun.github.io" rel="me") stefanleun.github.io
        tr
          th.title.is-5 E-Mail
          td
            a.u-email(href="mailto:stefan211.so@googlemail.com") stefan211.so@googlemail.com
        tr
          th.title.is-5 LinkedIn
          td
            a(href="https://www.linkedin.com/in/stefanleun" rel="me") linkedin.com/in/stefanleun
        tr
          th.title.is-5 XING
          td 
            a(href="https://www.xing.com/profile/Stefan_Leun" rel="me") xing.com/profile/Stefan_Leun
        tr
          th.title.is-5 GitHub
          td 
            a(href="https://github.com/stefanleun" rel="me") github.com/stefanleun
        
</template>

<script>
export default {
  mounted () {
    this.$store.commit('background/false')
  }
}
</script>
