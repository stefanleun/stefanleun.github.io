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
 </template>

<script>
export default {
  mounted () {
    this.$store.commit('background/false')
  },
  data: function () {
    return {
      items: [
        { 
          title: "Datenanalyse",
          descr: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "pulse"
        },
        { 
          title: "Datenvisualisierung",
          descr: "(PowerBI, Python Stack, + Aufbereitung …) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "bar-chart"
        },
        { 
          title: "Algorithmenentwicklung",
          descr: "7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "shuffle"
        },
        { 
          title: "Webentwicklung",
          descr: "Full-Stack, Datenbankmodellierung - 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "code-slash"
        },
        { 
          title: "Machine Learning",
          descr: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "cog"
        },
        { 
          title: "Agiles Projektmanagement",
          descr: "9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          icon: "people"
        },
        // { 
        //   title: "Modellentwicklung",
        //   descr: "(Stochastische) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        //   icon: "analytics"
        // },
        // { 
        //   title: "Digitalisierungsberatung im Tax & Law-Umfeld",
        //   descr: "0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        //   icon: "trail-sign"
        // },
      ]
    }
  }
}
</script>
