import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { connect } from 'react-redux';
import { Link, LinkProps } from 'react-router-dom';

import { AppRoutes } from '../../app-routes.enum';

import { mapStateToProps, PeopleListItemProps } from './people-list-item.props';

function PeopleListItem({ people, getFilmTitle }: PeopleListItemProps) {
  const MyButton = React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>(
    (props, ref) => (
      <Link to={`${AppRoutes.people}/${people.id}`} {...props} ref={ref} />
    )
  );

  const films = people.films?.map((film) => {
    const id = film.split('/').pop() as string;
    return getFilmTitle(id) || '';
  });

  return (
    <ListItemButton component={MyButton} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>{people.name.slice(0, 1)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={people.name} secondary={films.join(', ')} />
    </ListItemButton>
  );
}

export default connect(mapStateToProps)(PeopleListItem);
