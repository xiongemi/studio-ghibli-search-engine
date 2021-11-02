import { RouterState } from 'connected-react-router';

import { FilmsState } from '../films/films.slice';
import { PeopleState } from '../people/people.slice';
import { SearchState } from '../search/search.slice';

export interface RootState {
  films: FilmsState;
  router: RouterState;
  search: SearchState;
  people: PeopleState;
}