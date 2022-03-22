import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const StoreDecorator = (story) => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  return <Provider store={store}>{story()}</Provider>;
};
