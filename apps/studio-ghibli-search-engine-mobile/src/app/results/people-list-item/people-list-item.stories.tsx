import { storiesOf } from '@storybook/react-native';
import { mockPeopleEntity } from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { NavigationDecorator } from '../../../../.storybook/mocks/navigation';

import PeopleListItem from './people-list-item';

export const StoreDecorator = (story) => {
  const mockStore = configureStore<RootState>([]);
  const store = mockStore(initialRootState);
  return <StoreProvider store={store}>{story()}</StoreProvider>;
};

storiesOf('PeopleListItem', module)
  .addDecorator(StoreDecorator)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <PeopleListItem people={mockPeopleEntity} />);
