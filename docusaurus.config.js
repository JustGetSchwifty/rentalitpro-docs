// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentace',
  tagline: 'Rentalit Pro',
  url: 'https://docs.rentalitpro.cz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JustGetSchwifty', // Usually your GitHub org/user name.
  projectName: 'rentalitpro-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cz',
    locales: ['cz'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-NWXXQT7',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dokumentace Rentalit Pro',
        logo: {
          alt: 'Rentalit Pro',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Návody',
          },
          {
            href: 'https://rentalitpro.cz',
            label: 'Rentalit Pro',
            position: 'right',
          },
          {
            href: 'https://rentalit.cz',
            label: 'Rentalit',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `<p style="font-size: 0.85rem; line-height: 1.35rem; margin-bottom: 0.2rem;">© ${new Date().getFullYear()} Rentalit s. r. o.<br>Tel.: <a href="tel:+420604616720">604&nbsp;616&nbsp;720</a>&nbsp;&amp;&nbsp;<a href="tel:+420731395600">731&nbsp;395&nbsp;600</a>, E-mail: <a href="mailto:info@rentalit.cz">info@rentalit.cz</a></p><p style="font-size: 0.75rem; line-height: 1.3;">Sokolovská&nbsp;700/113a, 186&nbsp;00 Praha&nbsp;8&nbsp;–&nbsp;Karlín, IČO: 08806594,<br> zapsaná v&nbsp;obchodním rejstříku vedeném Městským soudem v&nbsp;Praze, oddíl C, vložka 325708</p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
