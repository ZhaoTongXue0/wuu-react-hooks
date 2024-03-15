//实现CDN产出 > umd

const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'wuuCodeHooks.js',
    library: 'wuuCodeHooks',
    path: path.resolve(__dirname, './dist'),
  },
});
