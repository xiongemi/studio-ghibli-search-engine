import React from 'react';
import { View, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput, Button, Title, Headline } from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';

/* eslint-disable-next-line */
export interface SearchProps {}

export function Search(props: SearchProps) {
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          style={{ height: 200, width: '100%', resizeMode: 'contain' }}
          source={require('../../assets/logo.png')}
        />
        <View style={[styles.mt3, styles.flex, styles.aic]}>
          <Headline>Studio Ghibli Search Engine</Headline>
        </View>
        <TextInput
          style={[styles.mt3]}
          label="Any film or character"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          style={[styles.mt3, styles.mh3]}
          icon="magnify"
          mode="contained"
          onPress={() => console.log('Pressed')}
        >
          Search
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
