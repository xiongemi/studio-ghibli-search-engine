import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { storiesOf } from '@storybook/react-native';
import {
  initialRootState,
  RootState,
} from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Film from './film';

const NavigationDecorator = (story) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="MyStorybookScreen"
          component={story}
          initialParams={{ id: 123 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const StoreDecorator = (story) => {
  const mockStore = configureStore<RootState>([thunk]);
  const store = mockStore(initialRootState);
  return <StoreProvider store={store}>{story()}</StoreProvider>;
};

storiesOf('Film', module)
  .addDecorator(StoreDecorator)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <Film />);
