const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const { merge: webpackMerge } = require('webpack-merge');

// module.exports = (env) => {
module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log(mode);
  return webpackMerge(
    {
      mode,
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
