import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { filmsActions, filmsSelectors } from '../films/films.slice';
import { peopleActions, peopleSelectors } from '../people/people.slice';
import { RootState } from '../root/root-state.interface';

export const SEARCH_FEATURE_KEY = 'search';

export interface SearchState {
  searchText?: string;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const fetchSearch = createAsyncThunk<string, string, { state: RootState }>(
  'search/fetchStatus',
  async (searchText: string, { getState, dispatch }) => {
    const rootState = getState();
    if (filmsSelectors.shouldFetchFilms(rootState)) {
      await dispatch(filmsActions.fetchFilms());
    }
    if (peopleSelectors.shouldFetchPeople(rootState)) {
      await dispatch(peopleActions.fetchPeople());
    }
    return searchText
  }
);

export const initialSearchState: SearchState = {
  loadingStatus: 'not loaded',
};

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState,
  reducers: {
    setSearchText(state: SearchState, action: PayloadAction<string>) {
      state.searchText = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSearch.pending,
        (state: SearchState) => {
          state.loadingStatus = 'loading';
        }
      )
      .addCase(
        fetchSearch.fulfilled,
        (state: SearchState, action: PayloadAction<string>) => {
          state.loadingStatus = 'loaded';
          state.searchText = action.payload;
        }
      )
      .addCase(fetchSearch.rejected, (state: SearchState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const searchReducer = searchSlice.reducer;

export const searchActions = {fetchSearch, ...searchSlice.actions};

export const getSearchState = (rootState: RootState): SearchState =>
  rootState[SEARCH_FEATURE_KEY];