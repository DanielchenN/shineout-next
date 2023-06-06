const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HTMLWebpackPlugin = require('html-webpack-plugin');

require('../scripts/dev-doc.js');

const webpackConfig = {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'source-map',
  entry: path.join(__dirname, '../docs/index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.less'],
    alias: {
      shineout: path.resolve(__dirname, '../packages/shineout/src'),
      store: path.resolve(__dirname, '../docs/theme/store'),
      chunk: path.resolve(__dirname, '../docs/chunk'),
      '@shined/ui': path.resolve(__dirname, '../packages/ui/src'),
      '@shined/shineout-style': path.resolve(__dirname, '../packages/shineout-style/src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/prismjs/],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.md$/i,
        loader: 'raw-loader',
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new Webpack.ProvidePlugin({
      React: 'react',
    }),
    new HTMLWebpackPlugin({
      title: 'Shineout Next',
      template: path.join(__dirname, '../public/index.ejs'),
    }),
  ],
};

const compiler = Webpack(webpackConfig);

const server = new WebpackDevServer(
  {
    open: false,
    compress: true,
  },
  compiler,
);

server.listen(2333, 'localhost', () => {
  console.log('Shineout Doc is running on port 2333');
});