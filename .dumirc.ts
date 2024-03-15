import {defineConfig} from 'dumi';

export default defineConfig({
  exportStatic: {},
  history: {type: 'hash'},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  themeConfig: {
    hd: {rules: []},
    rtl: true,
    name: 'wuu code',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/ZhaoTongXue0/wuu-react-hooks',
    },
    nav: [
      {title: '指南', link: '/guide'},
      {title: 'Hooks', link: '/hooks'}
    ],
    footer: `Copyright © ${new Date().getFullYear()} wuu-react-hooks`,
    sidebar: {
      '/hooks': [
        {
          children: [{title: 'hooks', link: '/hooks'}]
        },
        {
          title: '状态',
          children: [
            {title: 'useToggle', link: '/hooks/use-toggle'}
          ],
        }
      ]
    }
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{type: 'hooks', dir: 'packages/hooks/src'}],
    codeBlockMode: 'active',
  },
  autoAlias: true,
  alias: {
    hooks: 'packages/hooks/src',
  },
});
