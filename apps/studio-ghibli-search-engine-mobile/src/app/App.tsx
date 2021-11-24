import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createRootStore,
  transformEntityStateToPersist,
} from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Search from './search/search';
import Loading from './shared/loading/loading';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['search', 'films', 'people'],
    transforms: [transformEntityStateToPersist],
  };

  const { store, persistor } = createRootStore(persistConfig);
  const Stack = createNativeStackNavigator();

  return (
    <StoreProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
              <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
