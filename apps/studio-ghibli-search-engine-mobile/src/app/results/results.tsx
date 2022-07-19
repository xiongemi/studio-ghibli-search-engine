import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { Divider, Searchbar, Subheading } from 'react-native-paper';
import { connect } from 'react-redux';

import Loading from '../shared/loading/loading';

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
    <SafeAreaView testID="results-page">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Searchbar
          placeholder="Any film or character"
          value={textToSearchInState || ''}
          onChangeText={submitSearchForm}
        />
        {isSearchLoading ? (
          <Loading />
        ) : (results && results.length) || !textToSearchInState ? (
          results.map((result) => (
            <View key={result.id} testID="result-list-item">
              <ResultListItem listItem={result} />
              <Divider />
            </View>
          ))
        ) : (
          <View style={{ padding: 10 }}>
            <Subheading>Nothing found!</Subheading>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
