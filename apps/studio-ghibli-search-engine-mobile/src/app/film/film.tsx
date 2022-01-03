import { RouteProp, useRoute } from '@react-navigation/native';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';
import {
  Button,
  Divider,
  Headline,
  Paragraph,
  Subheading,
  Title,
} from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import Loading from '../shared/loading/loading';

import { FilmProps, mapDispatchToProps, mapStateToProps } from './film.props';

export function Film({ getFilm, fetchFilms }: FilmProps) {
  const [film, setFilm] = useState<FilmEntity>();

  const route = useRoute<RouteProp<{ params: { id: string } }>>();
  const id = route.params?.id;

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    setFilm(getFilm(id));
  }, [id, getFilm]);

  return film ? (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.pa3]}>
          <Image
            style={{ height: 200, width: '100%', resizeMode: 'contain' }}
            source={{ uri: film.movieBanner }}
          />
          <Headline>{film.title}</Headline>
          <Subheading>
            {film.originalTitle} / {film.originalTitleRomanised}
          </Subheading>
          <Paragraph>Release: {film.releaseDate}</Paragraph>
          <Paragraph>Director: {film.director}</Paragraph>
          <Paragraph>Producer: {film.producer}</Paragraph>
          <Paragraph>Running Time: {film.runningTime} minutes</Paragraph>
          <Paragraph>Rotten Tomatoes Score: {film.rtScore}</Paragraph>

          <Divider />

          <Title>Plot</Title>
          <Paragraph>{film.description}</Paragraph>

          <Divider />

          <Button>Watch on HBO Max</Button>
          <Button>Watch on Netflix</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
