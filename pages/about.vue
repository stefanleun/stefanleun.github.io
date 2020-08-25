<template lang="pug">
  div 
    h1.title About
    h3.subtitle Coming soon...
</template>

<script>
export default {
  mounted () {
    this.$store.commit('background/false')
  }
}
</script>
