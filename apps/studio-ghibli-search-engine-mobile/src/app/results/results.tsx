import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import {
  ActivityIndicator,
  Searchbar,
  Subheading,
  TextInput,
} from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import { AppRoutes } from '../shared/app-routes.enum';

import ResultListItem from './result-list-item/result-list-item';
import {
  mapDispatchToProps,
  mapStateToProps,
  ResultsProps,
} from './results.props';

export function Results({
  searchText,
  results,
  textToSearchInState,
  isSearchLoading,
}: ResultsProps) {
  const route = useRoute<RouteProp<{ params: { search: string } }>>();
  const searchParam = route.params?.search;

  useEffect(() => {
    if (searchParam) {
      searchText(searchParam);
    }
  }, [searchText, searchParam]);

  const submitSearchForm = (text: string) => {
    searchText(text);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Searchbar
          placeholder="Any film or character"
          value={textToSearchInState}
          onChangeText={submitSearchForm}
        />
        {isSearchLoading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (results && results.length) || !textToSearchInState ? (
          results.map((result) => (
            <ResultListItem key={result.id} listItem={result} />
          ))
        ) : (
          <View style={[styles.pa3, styles.tc]}>
            <Subheading>Nothing found!</Subheading>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
