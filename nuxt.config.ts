// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()    
    ]
  },
  css: ['@/assets/css/main.css'],
  srcDir: './',
  alias: {
    '@': './',
    '~': './',
    'assets': './assets',
    'public': './public'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo.png' }
      ],
      title: 'Blackfyre',
      meta: [
        {
          name: 'keywords', content: 'Blackfyre crypto, Blackfyre cryptocurrency, Blackfyre blockchain, crypto trading platform, DeFi investment platform, decentralized finance, secure crypto exchange, Web3 crypto platform'
        },
        {
          name: 'description', content: 'Blackfyre is a cutting-edge cryptocurrency ecosystem designed for the future of decentralized finance. Built with advanced blockchain technology, it offers users a secure and transparent platform for trading, staking, and managing digital assets. Whether you’re a beginner exploring crypto or a professional investor seeking next-level insights, Blackfyre delivers speed, trust, and innovation through its intuitive interface and real-time analytics tools.',
        },
        {
          name: 'Author', content: 'Anthony Enedah',
        }
      ]
    }
  }
})
