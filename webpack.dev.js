import { merge } from 'webpack-merge';
import config from './webpack.config.js';

export default merge(config, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  output: { publicPath: '/' },
});
