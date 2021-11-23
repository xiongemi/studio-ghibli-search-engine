import { configureStore } from '@reduxjs/toolkit';
import { History } from 'history';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { transformEntityStateToPersist } from './persist-transform';
import { initialRootState } from './root-state.initial';
import { createRootReducer } from './root.reducer';

export const createRootStore = (history?: History) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
    transforms: [transformEntityStateToPersist],
  };

  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
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
