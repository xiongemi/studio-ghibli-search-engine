import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createRootStore,
  FILMS_FEATURE_KEY,
  PEOPLE_FEATURE_KEY,
  SEARCH_FEATURE_KEY,
  transformEntityStateToPersist,
} from '@studio-ghibli-search-engine/store';
import { createMemoryHistory, History } from 'history';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Film from './film/film';
import Films from './films/films';
import People from './people/people';
import Results from './results/results';
import Search from './search/search';
import { AppRoutes } from './shared/app-routes.enum';
import Loading from './shared/loading/loading';
import { RootStackParamList } from './shared/root-stack-param-list.type';

export const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [SEARCH_FEATURE_KEY, FILMS_FEATURE_KEY, PEOPLE_FEATURE_KEY],
    transforms: [transformEntityStateToPersist],
  };
  const history: History = createMemoryHistory();

  const { store, persistor } = createRootStore(persistConfig, history);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={AppRoutes.search}>
              <Stack.Screen name={AppRoutes.search} component={Search} />
              <Stack.Screen name={AppRoutes.results} component={Results} />
              <Stack.Screen name={AppRoutes.films} component={Films} />
              <Stack.Screen name={AppRoutes.film} component={Film} />
              <Stack.Screen name={AppRoutes.people} component={People} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
