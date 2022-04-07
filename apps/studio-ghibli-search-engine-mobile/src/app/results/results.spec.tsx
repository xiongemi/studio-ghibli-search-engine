import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import Results from './results';

describe('Results', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { container } = render(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
