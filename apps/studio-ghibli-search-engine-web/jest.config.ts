/* eslint-disable */
export default {
  displayName: 'studio-ghibli-search-engine-web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/studio-ghibli-search-engine-web',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
