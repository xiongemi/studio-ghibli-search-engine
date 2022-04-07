import '@testing-library/jest-native/extend-expect';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        id: '123',
      },
    }),
  };
});

jest.mock(
  '../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper'
);

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
