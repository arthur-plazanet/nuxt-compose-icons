import { defineConfig } from 'vitepress';
import typedocSidebar from '../api/typedoc-sidebar.json';

const sidebar = {
  '/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/guide/concept' },
        { text: 'Features', link: '/guide/features' },
        { text: 'Getting Started', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'API',
      link: '/api',
      items: typedocSidebar,
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Compose Icons',
  description: 'A VitePress Site',
  head: [
    ['link', { rel: 'icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicon/favicon-48x48.png',
      },
    ],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/web-app-manifest-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/favicon/web-app-manifest-512x512.png',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/guide/concept' },
      { text: 'Playground', link: 'https://compose-icons-playground.vercel.app/' },
    ],

    search: {
      provider: 'local',
    },

    sidebar: sidebar,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/arthur-plazanet/nuxt-compose-icons',
      },
    ],
    outline: [2, 3],
  },
  cleanUrls: true,
  vite: {
    server: {
      allowedHosts: ['http://arthur.icon-docs'],
    },
  },
});
