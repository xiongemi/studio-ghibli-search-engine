import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';
import { compareTwoStrings } from 'string-similarity';

import { filmsActions, filmsSelectors } from '../films/films.slice';
import { peopleActions, peopleSelectors } from '../people/people.slice';
import { RootState } from '../root/root-state.interface';

export const SEARCH_FEATURE_KEY = 'search';

export interface SearchState {
  searchText?: string;
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const fetchSearch = createAsyncThunk<
  string,
  string,
  { state: RootState }
>('search/fetchStatus', async (searchText: string, { dispatch }) => {
  await dispatch(filmsActions.fetchFilms());
  await dispatch(peopleActions.fetchPeople());

  return searchText;
});

export const initialSearchState: SearchState = {
  loadingStatus: 'not loaded',
};

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state: SearchState) => {
        state.loadingStatus = 'loading';
      })
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

export const searchActions = { fetchSearch, ...searchSlice.actions };

export const getSearchState = (rootState: RootState): SearchState =>
  rootState[SEARCH_FEATURE_KEY];

export const getSearchLoadingStatus = createSelector(
  getSearchState,
  (searchState: SearchState) => searchState.loadingStatus
);

export const getSearchText = createSelector(
  getSearchState,
  (searchState: SearchState): string | undefined => searchState.searchText
);

export const isSearchLoading = createSelector(
  getSearchLoadingStatus,
  (loadingStatus) => loadingStatus === 'loading'
);

export const getSearchResults = createSelector(
  getSearchText,
  peopleSelectors.selectAllPeople,
  filmsSelectors.selectAllFilms,
  (
    searchText: string | undefined,
    peopleEntities: PeopleEntity[],
    filmEntities: FilmEntity[]
  ): (PeopleEntity | FilmEntity)[] => {
    if (!searchText) {
      return [];
    }
    const filmResults = filmEntities
      .map((film) => ({
        ...film,
        similarity: film.title.toLowerCase().includes(searchText.toLowerCase())
          ? 0.8
          : compareTwoStrings(film.title, searchText),
      }))
      .filter((film) => film.similarity > 0.3);
    const peopleResults = peopleEntities
      .map((people) => {
        return {
          ...people,
          similarity: people.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
            ? 0.8
            : compareTwoStrings(people.name, searchText),
        };
      })
      .filter((people) => people.similarity > 0.3);
    return [...filmResults, ...peopleResults].sort(
      (a, b) => b.similarity - a.similarity
    );
  }
);

export const searchSelectors = {
  getSearchText,
  getSearchResults,
  isSearchLoading,
};
