export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "Rivate - Vue Technology Startup & Business Agency Template + Admin Panel",
    htmlAttrs: {
      lang: "zxx",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
    ],
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
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "static",
};
