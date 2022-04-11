import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { compareTwoStrings } from 'string-similarity';

import FilmCard from '../shared/film-card/film-card';
import Loading from '../shared/loading/loading';

import { FilmsProps, mapDispatchToProps, mapStateToProps } from './flims.props';

export function Films({ films, fetchFilms }: FilmsProps) {
  const [text, setText] = useState<string>('');
  const [filteredFilms, setFilteredFilms] = useState<FilmEntity[]>([]);

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    if (films && films.length) {
      if (!text) {
        setFilteredFilms(films);
      } else {
        setFilteredFilms(
          films.filter(
            (film) =>
              film.title.toLowerCase().includes(text.toLowerCase()) ||
              compareTwoStrings(film.title, text) > 0.2
          )
        );
      }
    }
  }, [films, text]);

  return (
    <SafeAreaView testID="all-films-page">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Searchbar value={text} onChangeText={setText} />
        {filteredFilms ? (
          filteredFilms?.map((film) => <FilmCard key={film.id} {...film} />)
        ) : (
          <Loading />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);
