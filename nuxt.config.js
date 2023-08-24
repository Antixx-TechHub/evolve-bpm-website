export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EvolveBPM',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/animate.min.css",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/boxicons.min.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-carousel", ssr: false },
    { src: "~/plugins/vue-backtotop", ssr: false },
    // { src: "~/plugins/vue-cool-lightbox", ssr: false },
    // { src: "~/plugins/vue-image-lightbox", ssr: false },
    { src: "~/plugins/vue-lazyload", ssr: false },
    { src: "~/plugins/vue-toastification", ssr: false },
  ],

    /*
   ** Globally configure <nuxt-link> default active class.
   */
   router: {
    linkActiveClass: "active",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
