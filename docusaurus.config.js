// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'based.builders',
  tagline: 'Wiki about Web3 stuff',
  favicon: 'img/favicon.png',

  url: 'https://based.builders',
  baseUrl: '/',

  scripts: [{ src: 'https://plausible.based.builders/js/script.js', defer: true, 'data-domain': 'based.builders' }],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/based-builders/wiki/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          //editUrl: 'https://github.com/based-builders/wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      typesense: {
        typesenseCollectionName: 'based-builders',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'search.based.builders',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'h0qcIqYNaZhSnVd1YeiTulE9O7YXSRNf',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },

      announcementBar: {
        id: 'renewal',
        content:
          'Another renewal, this seems to be the best framework yet. Join the <a target="_blank" rel="noopener noreferrer" href="https://t.me/basedbuilders">telegram news channel</a>!',
        backgroundColor: '#ffd60a',
        textColor: '#000000',
        isCloseable: true,
      },
      colorMode: { defaultMode: 'dark', },
      docs: { sidebar: { hideable: true, autoCollapseCategories: true, }, },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'based.builders',
        logo: {
          alt: 'based.builders logo',
          src: 'img/outlined.png',
        },
        items: [
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'defiSidebar', position: 'left', label: 'DeFi', },
          { type: 'docSidebar', sidebarId: 'daoSidebar', position: 'left', label: 'DAO', },
          { type: 'docSidebar', sidebarId: 'metaverseSidebar', position: 'left', label: 'NFT+Social', },
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'psyopsSidebar', position: 'left', label: 'Psyops', },
          { type: 'docSidebar', sidebarId: 'analyticsSidebar', position: 'left', label: 'Analytics', },
          { type: 'docSidebar', sidebarId: 'devSidebar', position: 'left', label: 'Dev', },
          { type: 'docSidebar', sidebarId: 'jobsSidebar', position: 'left', label: 'Jobs', },
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'opsecSidebar', position: 'left', label: 'OpSec', },
          { type: 'docSidebar', sidebarId: 'aiSidebar', position: 'left', label: 'AI Tools', },
          { type: 'docSidebar', sidebarId: 'piracySidebar', position: 'left', label: 'Piracy', },
          { type: 'docSidebar', sidebarId: 'useSidebar', position: 'right', label: 'Use crypto', },
          { to: '/blog', label: 'Blog', position: 'right' },
          { type: 'doc', docId: 'Special-Thanks', position: 'right', label: '💛', },
          { href: "https://t.me/basedbuilders", label: "Telegram", position: "right", },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              { label: 'Home', to: '/', },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Telegram News Channel', href: 'https://t.me/basedbuilders', },
              { label: 'Telegram Chat', href: 'https://t.me/basedbuilders_chat', },
            ],
          },
          {
            title: 'Projects',
            items: [
              { label: 'Blog', to: '/blog', },
            ],
          },
        ],
        //copyright: `💛`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
