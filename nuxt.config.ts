// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // モジュール
  modules: [
    '@nuxt/image'
  ],

  // TypeScript設定
  typescript: {
    strict: true,
    typeCheck: true
  },

  // コンポーネントの自動インポート
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // CSS設定
  css: ['~/assets/css/main.css'],

  // ランタイム設定
  runtimeConfig: {
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    public: {
      youtubeChannelHandle: 'WANIVSPBAO'
    }
  },

  // アプリ設定
  app: {
    head: {
      title: '深谷爬虫類館',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '深谷爬虫類館 - 100種類以上の爬虫類を展示する専門施設' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logo.png' },
        { rel: 'shortcut icon', href: '/images/logo.png' }
      ]
    }
  }
})