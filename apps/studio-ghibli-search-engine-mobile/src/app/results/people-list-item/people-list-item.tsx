import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { List } from 'react-native-paper';
import { connect } from 'react-redux';

import { AppRoutes } from '../../shared/app-routes.enum';

import { mapStateToProps, PeopleListItemProps } from './people-list-item.props';

export function PeopleListItem({ people, getFilmTitle }: PeopleListItemProps) {
  const navigation = useNavigation();

  const viewPeopleDetails = () => {
    navigation.navigate(AppRoutes.people, { id: people.id });
  };

  const films: string[] = people.films?.map((film) => {
    const id = film.split('/').pop() as string;
    return getFilmTitle(id) || '';
  });

  return (
    <List.Item
      title={people.name}
      description={films.join(', ')}
      left={() => <List.Icon icon="account" />}
      onPress={viewPeopleDetails}
    />
  );
}

export default connect(mapStateToProps)(PeopleListItem);
