
import { initialFilmsState } from '../films/films.slice';
import { initialPeopleState } from '../people/people.slice';
import { initialSearchState } from '../search/search.slice';

export const initialRootState = {
  films: initialFilmsState,
  search: initialSearchState,
  people: initialPeopleState,
};
