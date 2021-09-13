export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aiko DashBoard',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '@/components/bosons/base.scss',
    'ant-design-vue/dist/antd.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor', '@/plugins/antd-ui', '@/plugins/googlemaps'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vuejs-google-maps/nuxt',
    [
      'vuejs-google-maps/nuxt',
      { apiKey: 'AIzaSyA2LWZxYXnchfaUMO4bIxAB_SOI6cIobks' },
    ],
  ],

  googleMaps: { apiKey: 'AIzaSyA2LWZxYXnchfaUMO4bIxAB_SOI6cIobks' },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3333/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  styleResources: {
    scss: ['@/components/bosons/*.scss'],
  },
}
