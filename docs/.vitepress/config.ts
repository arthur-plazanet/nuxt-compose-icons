import { defineConfig } from 'vitepress';
// import typedocSidebar from '../api/typedoc-sidebar.json';

const sidebar = {
  '/': [
    {
      text: 'Guide',
      items: [
        { text: 'Concept', link: '/guide/concept' },
        // { text: 'Motivation', link: '/guide/concept#motivation' }, // 📎 anchor within concept.md
        { text: 'Features', link: '/guide/features' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
    {
      text: 'Utilities',
      items: [
        { text: 'useComposeIcon', link: '/utilities/use-compose-icon' },
        { text: 'Interactivity', link: '/utilities/interactivity' },
        { text: 'Icon Size', link: '/utilities/theming' },
      ],
    },
    // {
    //   text: 'API',
    //   link: '/api',
    //   items: typedocSidebar,
    // },
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
  // srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/guide/concept' },
      // { text: 'Playground', link: 'https://compose-icons-playground.vercel.app/' },
      { text: 'Playground', link: 'https://nuxt-icons-playground.use-compose.com' },
      {
        text: 'Interactive',
        link: import.meta.url.includes('localhost')
          ? 'http://localhost:'
          : 'https://nuxt-icons-playground.use-compose.com',
      },
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
  rewrites: {
    // '/web/css': '/web/css/:page',
    // 'docs/web/css/general.md': 'css/general.md',
    'packages/pkg-a/src/foo.md': 'pkg-a/foo.md',
    'packages/pkg-b/src/index.md': 'pkg-b/index.md',
    'packages/pkg-b/src/bar.md': 'pkg-b/bar.md',
  },
  vite: {
    // publicDir: 'public',
    build: {
      rollupOptions: {
        // external: ['@use-compose/ui', '@use-compose/ui/dist/*'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
        // external: ['@use-compose/ui', '@use-compose/ui/style.css'],
        // , '@use-compose/ui'],
        // noExternal: [/\.css$/],
      },
    },
    ssr: {
      noExternal: [/\.css$/, '@use-compose/ui', '@use-compose/ui/style.css'],
    },
    server: {
      allowedHosts: ['http://arthur.icon-docs'],
    },
  },
});
