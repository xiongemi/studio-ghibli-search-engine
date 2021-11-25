import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { filmsSlice } from '../films/films.slice';
import { peopleSlice } from '../people/people.slice';
import { searchSlice } from '../search/search.slice';

import { RootState } from './root-state.interface';

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    films: filmsSlice.reducer,
    router: connectRouter(history) as any,
    search: searchSlice.reducer,
    people: peopleSlice.reducer,
  });
