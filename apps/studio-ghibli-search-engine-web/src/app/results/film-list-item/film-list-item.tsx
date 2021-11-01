import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FilmEntity } from '@studio-ghibli-search-engine/models';

export function FilmListItem(listItem: FilmEntity) {
  return (
    <ListItemButton alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={listItem.title} src={listItem.image} />
      </ListItemAvatar>
      <ListItemText primary={listItem.title} secondary={listItem.description} />
    </ListItemButton>
  );
}

export default FilmListItem;
