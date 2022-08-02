const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')

module.exports = {
  title: 'naxmefy',
  description: 'just a dev',
  baseUrl: 'https://naxmefy.github.io/',
  extraWatchFiles: ['**/*.md', '**/*.vue'],
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '3SK_eEbXBonIE1ioei8UUIrdV0NWNTyFgrL_6dmMqIA'
      }
    ]
  ],
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
      id: 'G-325582735'
    })
  ]
}
