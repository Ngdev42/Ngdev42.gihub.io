import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Odyssey Zone",
  description: "Charting the unknown, line by line.",
  base:'/',
    head: [
    ['link', { rel: 'icon', href: 'https://github.com/Ngdev42.png' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://github.com/Ngdev42.png' }],
    ['meta', { name: 'theme-color', content: '#24292e' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ngdev42' }
    ]
  }
})
