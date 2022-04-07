import { mockPeopleEntity } from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import PeopleListItem from './people-list-item';

describe('PeopleListItem', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { container } = render(
      <Provider store={store}>
        <PeopleListItem people={mockPeopleEntity} />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
