import { combineReducers } from '@reduxjs/toolkit';
import { searchSlice } from '@studio-ghibli-search-engine/store';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { filmsSlice } from '../films/films.slice';
import { peopleSlice } from '../people/people.slice';

import { RootState } from './root-state.interface';

export const createRootReducer = (history: History) => combineReducers<RootState>({
  films: filmsSlice.reducer,
  router: connectRouter(history),
  search: searchSlice.reducer,
  people: peopleSlice.reducer,
});