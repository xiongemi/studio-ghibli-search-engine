import { initialFilmsState } from '../films/films.slice';
import { initialPeopleState } from '../people/people.slice';
import { initialSearchState } from '../search/search.slice';

import { RootState } from './root-state.interface';

export const initialRootState: RootState = {
  films: initialFilmsState,
  search: initialSearchState,
  people: initialPeopleState,
};
