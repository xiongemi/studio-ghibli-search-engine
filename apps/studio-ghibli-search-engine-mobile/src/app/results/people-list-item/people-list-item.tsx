import React from 'react';
import { List, Avatar } from 'react-native-paper';
import { connect } from 'react-redux';

import { AppRoutes } from '../../shared/app-routes.enum';

import { mapStateToProps, PeopleListItemProps } from './people-list-item.props';

function PeopleListItem({ people, getFilmTitle }: PeopleListItemProps) {
  const films = people.films?.map((film) => {
    const id = film.split('/').pop() as string;
    return getFilmTitle(id) || '';
  });

  return (
    <List.Item
      title={people.name}
      description={people.films.join(', ')}
      left={(props) => <List.Icon icon="folder" />}
    />
  );
}

export default connect(mapStateToProps)(PeopleListItem);
