import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { FilmEntity, LoadingStatus } from '@studio-ghibli-search-engine/models';
import {
  FilmResponse,
  responseRemap,
  searchService,
} from '@studio-ghibli-search-engine/services';

import { RootState } from '../root/root-state.interface';

export const FILMS_FEATURE_KEY = 'films';

export interface FilmsState extends EntityState<FilmEntity> {
  loadingStatus: LoadingStatus;
  error?: string;
}

export const filmsAdapter = createEntityAdapter<FilmEntity>();

export const fetchFilms = createAsyncThunk<
  FilmEntity[],
  void,
  { state: RootState }
>('films/fetchStatus', async (_, { rejectWithValue, getState }) => {
  try {
    const rootState: RootState = getState();
    const films = selectAllFilms(rootState);
    if (films && films.length) {
      return films;
    }
    const filmsResponse: FilmResponse[] = await searchService.getFilms();
    return filmsResponse.map((response) => responseRemap<FilmEntity>(response));
  } catch (error) {
    return rejectWithValue({ error });
  }
});

export const initialFilmsState: FilmsState = filmsAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: undefined,
});

export const filmsSlice = createSlice({
  name: FILMS_FEATURE_KEY,
  initialState: initialFilmsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state: FilmsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchFilms.fulfilled,
        (state: FilmsState, action: PayloadAction<FilmEntity[]>) => {
          filmsAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchFilms.rejected, (state: FilmsState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const filmsReducer = filmsSlice.reducer;

export const filmsActions = { fetchFilms, ...filmsSlice.actions };

const { selectAll, selectEntities, selectById } = filmsAdapter.getSelectors();

export const getFilmsState = (rootState: RootState): FilmsState =>
  rootState[FILMS_FEATURE_KEY];

export const selectAllFilms = createSelector(getFilmsState, selectAll);

export const selectFilmsEntities = createSelector(
  getFilmsState,
  selectEntities
);

export const selectFilmById = (id: string) =>
  createSelector(
    getFilmsState,
    (filmState: FilmsState): FilmEntity | undefined => {
      return selectById(filmState, id);
    }
  );

export const selectFilmTitleById = (id: string) =>
  createSelector(
    selectFilmById(id),
    (filmEntity: FilmEntity | undefined): string | undefined =>
      filmEntity?.title
  );

export const getFilmsLoadingStatus = createSelector(
  getFilmsState,
  (state): LoadingStatus => state.loadingStatus
);

export const filmsSelectors = {
  selectAllFilms,
  selectFilmById,
  selectFilmTitleById,
};
