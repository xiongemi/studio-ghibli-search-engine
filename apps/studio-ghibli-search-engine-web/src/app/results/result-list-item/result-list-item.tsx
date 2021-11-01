import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';

import FilmListItem from '../film-list-item/film-list-item';
import PeopleListItem from '../people-list-item/people-list-item';

export function ResultListItem(listItem: FilmEntity | PeopleEntity) {
  if ((listItem as FilmEntity).title) {
    const filmListItem = listItem as FilmEntity;
    return <FilmListItem {...filmListItem} />;
  }

  const peopleListItem = listItem as PeopleEntity;
  return (
    <PeopleListItem
      people={peopleListItem}
      getFilmTitle={() => {
        return '';
      }}
    />
  );
}

export default ResultListItem;
