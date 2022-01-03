import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';

import { AppRoutes } from '../shared/app-routes.enum';

export function Search() {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  const submitSearchForm = () => {
    navigation.navigate(AppRoutes.results, { search: text });
  };

  const showAllFilms = () => {
    navigation.navigate(AppRoutes.films);
  };

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
          onPress={() => submitSearchForm()}
        >
          Search
        </Button>
        <Button
          style={[styles.mt3, styles.mh3]}
          icon="filmstrip-box-multiple"
          mode="outlined"
          onPress={() => showAllFilms()}
        >
          All Films
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Search;
