
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
        href: 'https://fonts.googleapis.com/css2?family=Crimson+Text&family=Lato:wght@300;400&family=Crimson+Pro:wght@300;400;500;600;700&display=swap',
      }
    ],
    script: [
      {
        src: 'https://unpkg.com/ionicons@5.1.2/dist/ionicons.js'
      }
    ],
  },
  css: [
    '~/assets/sass/main.sass',
  ],
  components: true,
  modules: [
    '@nuxtjs/bulma',
    '@nuxt/content'
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-176130912-1'
    }]
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
