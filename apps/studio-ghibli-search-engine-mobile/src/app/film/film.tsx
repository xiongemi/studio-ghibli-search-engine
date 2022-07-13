import { RouteProp, useRoute } from '@react-navigation/native';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import { getEnv } from '@studio-ghibli-search-engine/services';
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
import { connect } from 'react-redux';

import Loading from '../shared/loading/loading';
import { useLink } from '../shared/open-link/open-link';

import { FilmProps, mapDispatchToProps, mapStateToProps } from './film.props';

export function Film({ getFilm, fetchFilms }: FilmProps) {
  const [film, setFilm] = useState<FilmEntity>();

  const route = useRoute<RouteProp<{ params: { id: string } }>>();
  const id = route.params?.id;

  const openHboMax = useLink(getEnv('NX_HBO_STREAMING_URL'), 'HBO Max');
  const openNetflix = useLink(getEnv('NX_NETFLIX_STREAMING_URL'), 'Netflix');

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    setFilm(getFilm(id));
  }, [id, getFilm]);

  return film ? (
    <SafeAreaView testID="film-page">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding: 20 }}>
          <Image
            style={{ height: 200, width: '100%', resizeMode: 'contain' }}
            source={{ uri: film.movieBanner }}
          />
          <Headline testID="title">{film.title}</Headline>
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

          <Button onPress={openHboMax}>Watch on HBO Max</Button>
          <Button onPress={openNetflix}>Watch on Netflix</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
