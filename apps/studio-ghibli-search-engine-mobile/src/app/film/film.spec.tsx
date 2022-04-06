import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import Film from './film';

describe('Film', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialRootState as any);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Film />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
