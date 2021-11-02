import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppRoutes } from '../../app-routes.enum';

export function FilmListItem(listItem: FilmEntity) {
  const MyButton = React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>((props, ref) => (
    <Link to={`${AppRoutes.film}/${listItem.id}`} {...props} ref={ref} />
  ));

  return (
    <ListItemButton component={MyButton} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={listItem.title} src={listItem.image} />
      </ListItemAvatar>
      <ListItemText primary={listItem.title} secondary={listItem.description} />
    </ListItemButton>
  );
}

export default FilmListItem;
