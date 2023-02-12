/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Programaniak Blog',
  author: 'Marcin Parda',
  headerTitle: 'Programaniak',
  description: 'Rozwijaj swoje programistyczne umiejętności razem ze mną.',
  language: 'pl',
  theme: 'system', // system, dark or light
  siteUrl: 'https://programaniak.vercel.app/',
  siteRepo: 'https://github.com/MarcinParda/programaniak-blog',
  siteLogo: '/static/images/face.png',
  image: '/static/images/face.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'marcin98parda@gmail.com',
  github: 'https://github.com/MarcinParda',
  linkedin: 'https://linkedin.com/in/marcinparda',
  locale: 'pl-PL',
  analytics: {
    plausibleDataDomain: 'programaniak.vercel.app',
    googleAnalyticsId: 'G-EZ2LTMDD9D',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'pl',
    },
  },
}

module.exports = siteMetadata
