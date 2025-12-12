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
    resendApiKey: process.env.RESEND_API_KEY,
    resendFrom: process.env.RESEND_FROM,
    public: {
      youtubeChannelHandle: 'WANIVSPBAO'
    }
  },

  // Nitro設定（Cloudflare Pages用）
  nitro: {
    preset: 'cloudflare-pages',
    experimental: {
      wasm: true
    }
  },

  // アプリ設定
  app: {
    head: {
      title: '深谷爬虫類館 | チャンネル鰐 | 100種類以上の爬虫類を展示する専門施設',
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '深谷爬虫類館（チャンネル鰐）は、埼玉県深谷市にある100種類以上の爬虫類を展示する専門施設です。トカゲ、ヘビ、カメ、ワニなど様々な爬虫類を間近で観察でき、触れ合い体験や餌やり体験も可能です。YouTubeチャンネル登録者100万人を誇る爬虫類専門施設です。' },
        { name: 'keywords', content: '深谷爬虫類館,チャンネル鰐,爬虫類館,爬虫類,ヘビ,トカゲ,カメ,ワニ,埼玉県,深谷市,爬虫類展示,触れ合い体験,餌やり体験,YouTube,チャンネル鰐YouTube' },
        { name: 'author', content: '深谷爬虫類館' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '深谷爬虫類館' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'og:image', content: '/images/logo.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/images/logo.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/logo.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/logo.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logo.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'canonical', href: 'https://fukayahachu.com' }
      ]
    }
  }
})