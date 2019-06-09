module.exports = {
  title: 'HelpChat Wiki',
  description: 'Your one-stop-shop for information about hundreads of plugins!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Paste', link: 'https://paste.helpch.at/' },
      { text: 'Yaml', link: 'https://yaml.helpch.at/' },
      { text: 'Github', link: 'https://helpch.at/git' },
      { text: 'Discord', link: 'https://helpch.at/discord' },
      { text: 'Docs', link: 'https://helpch.at/docs' },
    ],
  }
}