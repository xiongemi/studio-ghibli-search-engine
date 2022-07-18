/* eslint-disable */
export default {
  displayName: 'store',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  transform: {
    '^.+\\.[tj]sx?$': require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/store',
};
