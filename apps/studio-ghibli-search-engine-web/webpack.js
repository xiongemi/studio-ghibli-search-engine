const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
}

module.exports = getCustomWebpackConfig;
