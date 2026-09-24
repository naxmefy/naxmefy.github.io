const { defaultTheme } = require('vuepress')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
  title: 'naxmefy',
  description: 'just a dev',
  baseUrl: 'https://nax.me/',
  extraWatchFiles: ['**/*.md', '**/*.vue'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'naxmefy' }],
    ['meta', { property: 'og:title', content: 'naxmefy' }],
    ['meta', { property: 'og:description', content: 'just a dev' }],
    ['meta', { property: 'og:url', content: 'https://nax.me/' }],
    ['meta', { property: 'og:image', content: 'https://nax.me/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'naxmefy – just a dev' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'naxmefy' }],
    ['meta', { name: 'twitter:description', content: 'just a dev' }],
    ['meta', { name: 'twitter:image', content: 'https://nax.me/og-image.png' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '3SK_eEbXBonIE1ioei8UUIrdV0NWNTyFgrL_6dmMqIA'
      }
    ]
  ],
  theme: defaultTheme({
    logo: '/logo.png',
    navbar: [{ text: 'Impressum', link: '/impressum.html' }]
  }),
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://nax.me'
      }
    ],
    [
      'robots',
      {
        host: 'https://nax.me'
      }
    ],
    googleAnalyticsPlugin({
      id: 'G-TQJXKPLD1H'
    })
  ]
}
