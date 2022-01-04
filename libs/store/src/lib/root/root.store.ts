import { configureStore } from '@reduxjs/toolkit';
import { History } from 'history';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

import { initialRootState } from './root-state.initial';
import { RootState } from './root-state.interface';
import { createRootReducer } from './root.reducer';

export const createRootStore = (
  persistConfig: PersistConfig<RootState>,
  history: History
) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: false,
      });
      return isDevelopment
        ? defaultMiddleware.concat(logger)
        : defaultMiddleware;
    },
    devTools: isDevelopment,
    preloadedState: initialRootState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
