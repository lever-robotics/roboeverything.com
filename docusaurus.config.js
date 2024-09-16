// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RoboEverything',
  tagline: 'Build Robots Fast in ROS2',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  url: 'https://roboeverything.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marksoulier', // Usually your GitHub org/user name.
  projectName: 'urdf_documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid',
    'docusaurus-lunr-search',
  ],

  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-6VE18QWN8R',
      async: true,
    },
    {
      src: '/scripts/ga.js',
    },
  ],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        href: 'https://fonts.googleapis.com/css?family=Comfortaa',
        rel: 'stylesheet',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon.ico', // Default favicon
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)', // Favicon for dark mode
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/tailwind.scss')],
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   '@docusaurus/plugin-google-analytics',
    //   {
    //     trackingID: 'G-6VE18QWN8R', // Replace with your Google Analytics tracking ID
    //     anonymizeIP: true, // Optional: Set to true to anonymize the IP addresses of your visitors
    //   },
    // ],
    'docusaurus-plugin-sass',
      async function tailwind(context, options) {
        return {
          name: 'docusaurus-tailwindcss',
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require('tailwindcss'))
            postcssOptions.plugins.push(require('autoprefixer'))
            return postcssOptions
          },
        }
      },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/RoboEverything.png',
      metadata: [{ name: 'description', content: 'URDF Creator Documentation' }],
      navbar: {
        title: 'RoboEverything',
        logo: {
          alt: 'Logo',
          src: 'img/robot_arm2.svg',
          srcDark: 'img/robot_arm2_white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/download', // This path should match the path where your React component is rendered
            label: 'Download',
            position: 'left',
          },
          {
            to: '/developer', // This path should match the path where your React component is rendered
            label: 'Developer',
            position: 'left',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark', // Set the default mode to 'dark'
        disableSwitch: false, // Optional: if you want to disable the switch
        respectPrefersColorScheme: false, // Set this to false to ignore the user's system preference
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/F42V44qxwR',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/marksoulier/urdf_documentation/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marksoulier/URDF_Creator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

};

export default config;
