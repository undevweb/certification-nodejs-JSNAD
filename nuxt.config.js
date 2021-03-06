require('dotenv').config();

// ajouter seulement `router.base = '/<nom-du-depot>/'` si `DEPLOY_ENV` est `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  base: '/certification-nodejs-JSNAD/'
} : {};

export default {
  mode: 'spa',
  target: 'static', // default: 'server',
  server: {
    port: process.env.PORT || 3000, // par défaut: 3000
    host: '0.0.0.0' // par défaut: localhost
  },
  router: {
    ...routerBase,
      routes : [
          {
              name:'user-profile-generated',
              path:'/user/profile-generated/:token?',
              component:'pages/user/profile-generated/_token.vue'
          }
      ]
    // routes : [
    //   {
    //     name: 'users-login-success',
    //     path: '/user/success/:jwt?',
    //     component: 'pages/user/login.vue'
    //   },
    // ]

  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: './vuetify.options.js'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/prism' }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets({isServer}) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: {version: 3}
            }
          ]
        ]
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
  },
  // env: {
  //   WS_URL: process.env.WS_URL || 'http://localhost:3000'
  // }
}
