import {defineConfig} from 'dumi';
import {baseTheme, defineThemeConfig} from 'dumi-theme-chakra';

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
    hd: { rules: [] },
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
  },
});
