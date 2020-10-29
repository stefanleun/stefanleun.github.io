<template lang="pug">
  div
    h1.title Portfolio
    .tile.is-ancestor.portfolio-tiles
      PortfolioCard(
        v-for="item in portfolio"
        :title="item.title"
        :description="item.descr"
        :icon="item.icon"
        v-bind:key="item.title"
      )
 </template>

<script>
import data from '~/assets/data.json'

export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      portfolio: data["Portfolio"]
    }
  }
}
</script>

<style lang="sass">
.portfolio-tiles
    flex-wrap: wrap;
</style>