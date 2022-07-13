import { useNavigation } from '@react-navigation/native';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import { getEnv } from '@studio-ghibli-search-engine/services';
import React from 'react';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import truncate from 'truncate';

import { AppRoutes } from '../app-routes.enum';
import { useLink } from '../open-link/open-link';

export function FilmCard(film: FilmEntity) {
  const navigation = useNavigation();

  const viewFilmDetails = () => {
    navigation.navigate(AppRoutes.film, { id: film.id });
  };

  const openHboMax = useLink(getEnv('NX_HBO_STREAMING_URL'), 'HBO Max');
  const openNetflix = useLink(getEnv('NX_NETFLIX_STREAMING_URL'), 'Netflix');

  return (
    <Card style={{ marginBottom: 10 }}>
      <Card.Cover source={{ uri: film.image }} />
      <Card.Content>
        <Title>{film.title}</Title>
        <Paragraph> {truncate(film.description, 200)}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={openHboMax}>HBO Max</Button>
        <Button onPress={openNetflix}>Netflix</Button>
        <Button onPress={viewFilmDetails}>Details</Button>
      </Card.Actions>
    </Card>
  );
}

export default FilmCard;
