<template lang="pug">
  aside.menu#nav
    ul.menu-list
      li: NuxtLink(to="/") Home
      li: NuxtLink(to="/about") About
      li: NuxtLink(to="/portfolio") Portfolio
      li: NuxtLink(to="/blog") Blog
      li: NuxtLink(to="/impressum") Impressum
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped lang="sass">
#nav
  border: 0px solid black;
  padding: 20px;
  margin: 0px;
</style>
