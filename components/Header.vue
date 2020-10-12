<template lang="pug">
  nav.navbar(role="navigation", aria-label="main navigation")
    .navbar-brand
      a.navbar-item(href="https://stefanleun.github.io")
        Logo
      a.navbar-burger.burger(
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="showNav = !showNav"
        v-bind:class="{ 'is-active' : showNav }"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu#navbarBasicExample(
      v-bind:class="{ 'is-active' : showNav }"
    )
      .navbar-start
        NavLinks
</template>

<script>
  export default {
    data: function () {
      return {
        showNav: false
      }
    }
  }
</script>