import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { List } from 'react-native-paper';
import { Link, LinkProps } from 'react-router-dom';
import truncate from 'truncate';

import { AppRoutes } from '../../shared/app-routes.enum';

export interface FilmListItemProps {
  film: FilmEntity;
}

export function FilmListItem({ film }: FilmListItemProps) {
  return (
    <List.Item
      title={film.title}
      description={film.description}
      left={() => <List.Icon icon="filmstrip" />}
    />
  );
}

export default FilmListItem;