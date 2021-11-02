import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux';

import { mapStateToProps, PeopleListItemProps } from './people-list-item.props';

function PeopleListItem({
  people,
  getFilmTitle
}: PeopleListItemProps) {
  const films =
    people.films?.map((film) => {
      const id = film.split('/').pop() as string;
      return getFilmTitle(id) || '';
    });

  return (
    <ListItemButton alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>{people.name.slice(0, 1)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={people.name} secondary={films.join(', ')} />
    </ListItemButton>
  );
}

export default connect(mapStateToProps, null)(PeopleListItem);
