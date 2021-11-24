const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);
  const isProduction = webpackConfig.mode === 'production';

  if (!isProduction) {
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules[/\\](?!react-native-vector-icons)/,
      use: {
        loader: require.resolve('@nrwl/web/src/utils/web-babel-loader.js'),
        options: {
          presets: [
            [
              '@nrwl/react/babel',
              {
                runtime: 'automatic',
              },
            ],
          ],
          plugins: ['react-native-web'],
        },
      },
    });
  }

  return config;
}

module.exports = getCustomWebpackConfig;
