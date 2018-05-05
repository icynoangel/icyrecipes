// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const webpackConfigDev = require('./../config/webpack.config.dev');

const moduleRules = [
  webpackConfigDev.module.rules[1].oneOf[0],
  webpackConfigDev.module.rules[1].oneOf[2],
  webpackConfigDev.module.rules[1].oneOf[3],
  {
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  }
];


module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: moduleRules
  }
};
