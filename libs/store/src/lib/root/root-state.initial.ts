import { initialSearchState } from '@studio-ghibli-search-engine/store';
import { initialFilmsState } from '../films/films.slice';

export const initialRootState = {
  films: initialFilmsState,
  search: initialSearchState
};