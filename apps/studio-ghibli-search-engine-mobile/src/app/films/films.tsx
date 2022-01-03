import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import FilmCard from '../shared/film-card/film-card';

import { FilmsProps, mapDispatchToProps, mapStateToProps } from './flims.props';

export function Films({ films, fetchFilms }: FilmsProps) {
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {films && films?.map((film) => <FilmCard {...film} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);
