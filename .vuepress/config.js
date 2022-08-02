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
        content: 'w35pEFJVx__TMCmzNylxvpZU4EckDmEVfhgJ-Nz9z6o'
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
