import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  return (
    <View testID='search'>
      <Text>Welcome to search!</Text>
    </View>
  );
}

export default Search;
