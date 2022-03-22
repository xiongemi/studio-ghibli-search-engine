import { useNavigation } from '@react-navigation/native';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { List } from 'react-native-paper';

import { AppRoutes } from '../../shared/app-routes.enum';

export interface FilmListItemProps {
  film: FilmEntity;
}

export function FilmListItem({ film }: FilmListItemProps) {
  const navigation = useNavigation();

  const viewFilmDetails = () => {
    navigation.navigate(AppRoutes.film, { id: film.id });
  };

  return (
    <List.Item
      title={film.title}
      description={film.description}
      left={() => <List.Icon icon="filmstrip" />}
      onPress={viewFilmDetails}
    />
  );
}

export default FilmListItem;
