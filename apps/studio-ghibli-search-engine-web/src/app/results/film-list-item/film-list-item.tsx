import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import truncate from 'truncate';

import { AppRoutes } from '../../app-routes.enum';

export interface FilmListItemProps {
  film: FilmEntity;
}

export function FilmListItem({ film }: FilmListItemProps) {
  const MyButton = React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>(
    (props, ref) => (
      <Link to={`${AppRoutes.film}/${film.id}`} {...props} ref={ref} />
    )
  );

  return (
    <ListItemButton component={MyButton} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={film.title} src={film.image} />
      </ListItemAvatar>
      <ListItemText
        primary={film.title}
        secondary={truncate(film.description, 200)}
      />
    </ListItemButton>
  );
}

export default FilmListItem;
