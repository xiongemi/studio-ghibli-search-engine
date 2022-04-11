import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import Film from './film';

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

describe('Film', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  it('should render successfully for initial state', () => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <Film />
      </Provider>
    );
    expect(container).toBeTruthy();
  });

  it('should display film if it exists in store', () => {
    store = mockStore({
      ...initialRootState,
      films: {
        loadingStatus: 'loaded',
        ids: ['123'],
        entities: { '123': mockFilmEntity },
      },
    });
    store.dispatch = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <Film />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalled();
    expect(getByTestId('title')).toHaveTextContent(mockFilmEntity.title);
  });
});
