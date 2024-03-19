import {defineConfig} from 'dumi';

export default defineConfig({
  exportStatic: {},
  hash: true,
  history: {type: 'hash'},
  publicPath: '/wuu-react-hooks/',
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
    nprogress: true,
    hd: {rules: []},
    rtl: true,
    name: 'wuu code',
    logo: '/wuu-react-hooks/logo.png',
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
            {title: 'useToggle', link: '/hooks/use-toggle'},
            {title: 'useBoolean', link: '/hooks/use-boolean'}
          ],
        },
        {
          title: 'effect',
          children: [
            {title: 'useThrottleFn', link: '/hooks/use-throttle-fn'},
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
