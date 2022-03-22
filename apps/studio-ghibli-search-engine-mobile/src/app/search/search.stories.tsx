import { storiesOf } from '@storybook/react-native';
import {
  mockFilmEntity,
  mockPeopleEntity,
} from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { NavigationDecorator } from '../../../.storybook/mocks/navigation';

import Search from './search';

export const StoreDecorator = (story) => {
  const mockStore = configureStore<RootState>([]);
  const store = mockStore(initialRootState);
  return <StoreProvider store={store}>{story()}</StoreProvider>;
};

storiesOf('Search', module)
  .addDecorator(NavigationDecorator)
  .addDecorator(StoreDecorator)
  .add('Primary', () => <Search />);
