import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import Search from './search';

describe('Search', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { container, getByTestId } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(container).toBeTruthy();
    expect(getByTestId('search-page')).toBeTruthy();
    expect(getByTestId('heading')).toHaveTextContent(
      'Studio Ghibli Search Engine'
    );
  });
});
