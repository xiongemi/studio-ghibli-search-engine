import { storiesOf } from '@storybook/react-native';
import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { NavigationDecorator } from '../../storybook/mocks';

import Films from './films';

export const StoreDecorator = (story) => {
  const mockStore = configureStore<RootState>([thunk]);
  const store = mockStore({
    ...initialRootState,
    films: {
      loadingStatus: 'loaded',
      ids: [123],
      entities: { 123: mockFilmEntity },
    },
  });
  return <StoreProvider store={store}>{story()}</StoreProvider>;
};

storiesOf('Films', module)
  .addDecorator(StoreDecorator)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <Films />);
