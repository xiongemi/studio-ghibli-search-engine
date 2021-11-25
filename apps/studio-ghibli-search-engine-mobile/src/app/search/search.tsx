import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../../assets/logo.svg';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      <Logo width={100} height={100} />
      <TextInput
        label="Any film or character"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        icon="magnify"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
    </ScrollView>
  );
}

export default Search;
