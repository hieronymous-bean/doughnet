export default {
  loading: "~/components/loading.vue",
  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/",
        component: "~/pages/index.vue"
      });
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ["~/assets/scss/app.scss", 'quill/dist/quill.core.css', 'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/fireauth.js",
    "~/plugins/simplebar.js",
    "~/plugins/vue-click-outside.js",
    "~/plugins/vuelidate.js",
    "~/plugins/draggable.js",
    "~/plugins/vue-slidebar.js",
    "~/plugins/tour.js",
    "~/plugins/vue-lightbox.js",
    "~/plugins/mask.js",
    "~/plugins/quill-editor.js",
    "~/plugins/chartist.js",
    "~/plugins/vue-googlemap.js",
    "~/plugins/string-filter"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB5Cx1psBkAiehC_q0zJ6c1u3dpSL4ScGU",
          authDomain: "doughnet-01.firebaseapp.com",
          projectId: "doughnet-01",
          storageBucket: "doughnet-01.appspot.com",
          messagingSenderId: "465162683465",
          appId: "1:465162683465:web:080f99f6c77141f80b2b98",
          measurementId: "G-1DC4QQPF6X"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
