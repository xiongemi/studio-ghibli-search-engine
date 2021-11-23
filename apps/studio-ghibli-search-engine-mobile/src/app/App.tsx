import { NavigationContainer } from '@react-navigation/native';
import { createRootStore } from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from './shared/loading/loading';
import Search from './search/search';

const App = () => {
  const { store, persistor } = createRootStore();
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
