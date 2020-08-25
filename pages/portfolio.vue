<template lang="pug">
  div
    h1.title Portfolio

    ul 
      li Datenaufbereitung und Visualisierung (PowerBI, Python Stack, …)
      li Full-Stack Webentwicklung
      li Algorithmenentwicklung
      li Zeitreihenanalyse
      li (Stochastische) Modellierung
      li Agiles Projektmanagement
      li Machine Learning
      li Digitalisierungs/Transformationberatung im Tax & Law-Umfeld

 </template>

<script>
export default {
  mounted () {
    this.$store.commit('background/false')
  }
}
</script>

<style lang="sass">

</style>