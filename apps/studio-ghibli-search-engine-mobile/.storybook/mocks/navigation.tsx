import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export const NavigationDecorator = (story) => {
  return (
    <NavigationContainer independent={true}>{story()}</NavigationContainer>
  );
};
