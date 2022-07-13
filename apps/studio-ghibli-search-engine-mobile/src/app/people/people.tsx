import { RouteProp, useRoute } from '@react-navigation/native';
import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';
import { Divider, Headline, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';

import FilmCard from '../shared/film-card/film-card';
import Loading from '../shared/loading/loading';

import {
  mapDispatchToProps,
  mapStateToProps,
  PeopleProps,
} from './people.props';

export function People({
  loadingStatus,
  getPerson,
  getFilmById,
  fetchPeople,
}: PeopleProps) {
  const [person, setPerson] = useState<PeopleEntity>();
  const [films, setFilms] = useState<FilmEntity[]>();

  const route = useRoute<RouteProp<{ params: { id: string } }>>();
  const id = route.params?.id;

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    setPerson(getPerson(id));
  }, [id, getPerson, loadingStatus]);

  useEffect(() => {
    if (!person) return;
    const filmsUnderPerson: FilmEntity[] = [];
    person.films.forEach((filmUrl) => {
      const filmId = filmUrl.split('/').pop();
      if (!filmId) {
        return;
      }
      const filmUnderPerson: FilmEntity | undefined = getFilmById(filmId);
      if (filmUnderPerson !== undefined) {
        filmsUnderPerson.push(filmUnderPerson);
      }
    });
    setFilms(filmsUnderPerson);
  }, [person, getFilmById]);

  return person ? (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding: 10 }}>
          {films && films?.length && (
            <Image
              accessible={true}
              accessibilityLabel={films[0].title}
              style={{ height: 200, width: '100%', resizeMode: 'contain' }}
              source={{ uri: films[0].movieBanner }}
            />
          )}
          <Headline>{person?.name}</Headline>
          <Paragraph>Age: {person?.age || 'Unknown'}</Paragraph>
          <Paragraph>Gender: {person?.gender || 'Unknown'}</Paragraph>
          <Paragraph>Hair Color: {person?.hairColor || 'Unknown'}</Paragraph>
          {films && (
            <>
              <Divider style={{ marginVertical: 10 }} />
              {films?.map((film) => (
                <FilmCard key={film.id} {...film} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loading />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
