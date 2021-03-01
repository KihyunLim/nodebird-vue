module.exports = {
  head: {
    title: 'NodeBird',
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
    }, {
      'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
    }, {
      hid: 'desc', name: 'description', content: 'khlim nodebird sns',
    }, {
      hid: 'ogtitle', name: 'og:title', content: 'nodebird',
    }, {
      hid: 'ogdesc', name: 'og:description', content: 'khlim nodebird sns desc',
    }, {
      hid: 'ogtype', property: 'og:type', content: 'website',
    }, {
      hid: 'ogimage', property: 'og.image', content: 'https://uve.nodebird.com/vue-nodebird.png',
    }, {
      hid: 'ogurl', property: 'og:url', content: 'https://vue.nodebird.com',
    }],
    link: [{ rel: 'shortcut icon', href: '/logo_record_removebg_compress_80px.png'}]
  },
  modules: ['@nuxtjs/axios'],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],
  build: {
    analyze: false,
    extend(config, { isClient, isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }
      console.log('webpack', config, isServer, isClient);
    },
  },
  moment: {
    locales: ['ko'],
  },
  vuetify: {},
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'http://vueback.khlim.site' : 'http://localhost:3085',
    baseURL: process.env.NODE_ENV === 'production' ? 'http://vueback.khlim.site' : 'http://localhost:3085',
    https: false,
  },
  server: {
    port: process.env.PORT || 3081,
  },
};
