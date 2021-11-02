import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../app-routes.enum';

export function FilmListItem(listItem: FilmEntity) {
  return (
    <ListItemButton
      to={`${AppRoutes.film}/${listItem.id}`}
      component={Link}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar alt={listItem.title} src={listItem.image} />
      </ListItemAvatar>
      <ListItemText primary={listItem.title} secondary={listItem.description} />
    </ListItemButton>
  );
}

export default FilmListItem;
