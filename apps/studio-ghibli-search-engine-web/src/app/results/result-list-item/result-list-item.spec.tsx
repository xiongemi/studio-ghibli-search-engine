import { mockPeopleEntity } from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import ResultListItem from './result-list-item';

describe('ResultListItem', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <ResultListItem {...mockPeopleEntity} />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
