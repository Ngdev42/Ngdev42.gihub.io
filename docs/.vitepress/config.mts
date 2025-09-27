import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Odyssey Zone",
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blogs', link: '/blogs/blog' },
      { text: 'Notes', link: '/notes/note' },
      { text: 'Projects', link: '/projects/project' }
    ],
    search: {
      provider: 'local'
    },

    // 移除侧边栏
    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ngdev42' }
    ],
    footer: {
      message: '2025@Chuangyu "Joyu" Ng',
    }

  }
})
