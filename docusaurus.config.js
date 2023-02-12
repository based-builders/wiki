// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  url: 'https://based.builders',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          { type: 'docSidebar', sidebarId: 'defiSidebar', position: 'left', label: '💸 DeFi', },
          { type: 'docSidebar', sidebarId: 'web3Sidebar', position: 'left', label: 'Web3', },
          { type: 'docSidebar', sidebarId: 'web3Sidebar', position: 'left', label: 'AI Tools', },
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
              { label: 'Tutorial', to: '/docs/intro', },
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
