module.exports = {
  title: 'Reactive Button',
  tagline: 'A React Button component that thinks like React.',
  url: 'https://arifszn.github.io',
  baseUrl: '/reactive-button/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'arifszn',
  projectName: 'reactive-button',
  themeConfig: {
    navbar: {
      title: 'Reactive Button',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/arifszn/reactive-button',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/arifszn/reactive-button',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://arifszn.github.io" target="_blank">Ariful Alam</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/arifszn/reactive-button-doc/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};