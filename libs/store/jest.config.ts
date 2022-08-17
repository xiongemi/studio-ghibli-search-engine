/* eslint-disable */
export default {
  displayName: 'store',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  moduleNameMapper: {
    '.svg': '@nrwl/react-native/plugins/jest/svg-mock',
  },
  coverageDirectory: '../../coverage/libs/store',
};
