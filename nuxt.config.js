
export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Sans+Narrow&family=Prata&display=swap" rel="stylesheet'
      }
    ]
  },
  css: [
    '~/assets/sass/main.sass',
  ],
  components: true,
  modules: [
    '@nuxtjs/bulma',
    '@nuxt/content'
  ],
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  router: {
    linkExactActiveClass: 'is-active'
  }
}
