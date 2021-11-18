import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';

import FilmListItem from '../film-list-item/film-list-item';
import PeopleListItem from '../people-list-item/people-list-item';

export interface ResultListItemProps {
  listItem: FilmEntity | PeopleEntity;
}

export function ResultListItem({ listItem }: ResultListItemProps) {
  if ((listItem as FilmEntity).title) {
    const filmListItem = listItem as FilmEntity;
    return <FilmListItem film={filmListItem} />;
  }

  const peopleListItem = listItem as PeopleEntity;
  return <PeopleListItem people={peopleListItem} />;
}

export default ResultListItem;
