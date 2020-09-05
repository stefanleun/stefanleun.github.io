<template lang="pug">
  div
    h1.title Portfolio

    .columns.is-multiline
      PortfolioCard(
        v-for="item in items"
        :title="item.title"
        :description="item.descr"
        :icon="item.icon"
        v-bind:key="item.title"
      )
    ul 
      li(v-for="item in items" :key="item.title") {{ item.title }}

 </template>

<script>
export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      items: [
        { title: "Machine Learning",
          descr: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "code-slash"
        },
        { title: "Zeitreihenanalyse",
          descr: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "pulse"
        },
        { title: "Datenaufbereitung und Visualisierung (PowerBI, Python Stack, …)",
          descr: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "bar-chart"
        },
        { title: "Full-Stack Webentwicklung",
          descr: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
        },
        { title: "Algorithmenentwicklung",
          descr: "7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
        },
        { title: "(Stochastische) Modellierung",
          descr: "8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
        },
        { title: "Agiles Projektmanagement",
          descr: "9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
        },
        { title: "Digitalisierungs/Transformationberatung im Tax & Law-Umfeld",
          descr: "0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
        },
      ]
    }
  }
}
</script>

<style lang="sass">

</style>