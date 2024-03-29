import colors from 'vuetify/es5/util/colors'

const image = '/images/seo.jpg'
const description = "Oscar da Silva | Portfólio de desenvolvimento de software"
const title = 'Portfólio | Oscar da Silva'

export default {
  head: {
    titleTemplate: title,
    title,
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: image
      },
      {
        hid: "og:url",
        property: "og:url",
        content: 'https://oscardasilva.vercel.app'
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'image',
        property: 'image',
        content: image
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.png'
      },
      {
        rel: 'stylesheet',
        href: '/css/base.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/main.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/vendor.css'
      },
    ],
    script: [{
        src: '/js/modernizr.js'
      },
      {
        src: '/js/pace.min.js'
      },
      {
        src: '/js/jquery-2.1.3.min.js',
        body: true
      },
      {
        src: '/js/plugins.js',
        body: true
      },
      {
        src: '/js/main.js',
        body: true
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    retry: {
      retries: 3,
      retryDelay: () => 3000,
    }

  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  env: {
    profilesURL: process.env.PROFILE_API_URL || 'http://localhost:5000',
    contactsURL: process.env.CONTACT_API_URL || 'http://localhost:8000/contacts',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
