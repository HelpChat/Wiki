module.exports = {
  title: 'HelpChat Wiki',
  description: 'Coming Soon... Your one-stop-shop for information about hundreads of plugins and answers to lots of common question!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    'clean-urls',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Paste', link: 'https://paste.helpch.at/' },
      { text: 'Yaml', link: 'https://yaml.helpch.at/' },
      { text: 'Discord', link: 'https://helpch.at/discord' },
      { text: 'Docs', link: 'https://helpch.at/docs' },
    ],
  }
}