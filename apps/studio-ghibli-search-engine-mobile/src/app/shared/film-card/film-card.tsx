import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { styles } from 'react-native-style-tachyons';
import truncate from 'truncate';

export function FilmCard(film: FilmEntity) {
  return (
    <Card style={[styles.mb2]}>
      <Card.Cover source={{ uri: film.image }} />
      <Card.Content>
        <Title>{film.title}</Title>
        <Paragraph> {truncate(film.description, 200)}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>HBO Max</Button>
        <Button>Netflix</Button>
        <Button>Details</Button>
      </Card.Actions>
    </Card>
  );
}

export default FilmCard;
