import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, ScrollView, Image, SafeAreaView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import { AppRoutes } from '../shared/app-routes.enum';

import { mapStateToProps, SearchProps } from './search.props';

export function Search({ textToSearchInState }: SearchProps) {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  useEffect(() => {
    if (textToSearchInState) {
      setText(textToSearchInState);
    }
  }, [textToSearchInState]);

  const submitSearchForm = () => {
    navigation.navigate(AppRoutes.results, { search: text });
  };

  const showAllFilms = () => {
    navigation.navigate(AppRoutes.films);
  };

  return (
    <SafeAreaView testID="search-page">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          style={{ height: 200, width: '100%', resizeMode: 'contain' }}
          source={require('../../assets/logo.png')}
        />
        <View style={[styles.mt3, styles.flex, styles.aic]}>
          <Headline testID="heading">Studio Ghibli Search Engine</Headline>
        </View>
        <TextInput
          testID="search-input"
          style={[styles.mt3]}
          label="Any film or character"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          testID="search-button"
          style={[styles.mt3, styles.mh3]}
          icon="magnify"
          mode="contained"
          onPress={() => submitSearchForm()}
          disabled={!text.length}
        >
          Search
        </Button>
        <Button
          testID="all-films-button"
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

export default connect(mapStateToProps)(Search);
