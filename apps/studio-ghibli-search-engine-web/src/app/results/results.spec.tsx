import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import Results from './results';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: any) => <div>{children}</div>,
  useLocation: jest.fn().mockReturnValue({ search: '?search=text' }),
  useHistory: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe('Results', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
