// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'based.builders',
  tagline: 'Wiki about stuff',
  favicon: 'img/favicon.png',

  url: 'https://based.builders',
  baseUrl: '/',

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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: { sidebar: { hideable: true, autoCollapseCategories: true, }, },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'based.builders',
        logo: {
          alt: 'based.builders logo',
          //src: 'img/logo.svg',
          src: 'img/romanthing.png',
        },
        items: [
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'defiSidebar', position: 'left', label: 'DeFi', },
          { type: 'docSidebar', sidebarId: 'daoSidebar', position: 'left', label: 'DAO', },
          { type: 'docSidebar', sidebarId: 'nftSidebar', position: 'left', label: 'NFT', },
          { type: 'docSidebar', sidebarId: 'metaverseSidebar', position: 'left', label: 'Metaverse', },
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'psyopsSidebar', position: 'left', label: 'Psyops', },
          { type: 'docSidebar', sidebarId: 'analyticsSidebar', position: 'left', label: 'Analytics', },
          { type: 'docSidebar', sidebarId: 'devSidebar', position: 'left', label: 'Dev', },
          { type: 'docSidebar', sidebarId: 'jobsSidebar', position: 'left', label: 'Jobs', },
          { type: 'html', position: 'left', value: '///', },
          { type: 'docSidebar', sidebarId: 'opsecSidebar', position: 'left', label: 'Privacy', },
          { type: 'docSidebar', sidebarId: 'aiSidebar', position: 'left', label: 'AI Tools', },
          { type: 'docSidebar', sidebarId: 'piracySidebar', position: 'left', label: 'Piracy', },
          { type: 'docSidebar', sidebarId: 'osintSidebar', position: 'left', label: 'OSINT', },
          { type: 'docSidebar', sidebarId: 'useSidebar', position: 'right', label: 'Use crypto', },
          { type: 'doc', docId: 'Special-Thanks', position: 'right', label: 'Donate', },
          { to: '/blog', label: 'Blog', position: 'right' },
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
            title: 'Blog',
            items: [
              { label: 'Articles', to: '/blog', },
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
