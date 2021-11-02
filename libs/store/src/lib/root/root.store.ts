import { configureStore } from '@reduxjs/toolkit';
import { History } from 'history';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { transformEntityStateToPersist } from './persist-transform';
import { initialRootState } from './root-state.initial';
import { createRootReducer } from './root.reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['search', 'films', 'people'],
  transforms: [transformEntityStateToPersist],
};

export const createRootStore = (history: History) => {
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      isDevelopment
        ? getDefaultMiddleware().concat(logger)
        : getDefaultMiddleware(),
    devTools: isDevelopment,
    preloadedState: initialRootState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
