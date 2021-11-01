import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { PeopleEntity } from '@studio-ghibli-search-engine/models';
import {
  PeopleResponse,
  responseRemap,
  searchService,
} from '@studio-ghibli-search-engine/services';
import { RootState } from '@studio-ghibli-search-engine/store';

export const PEOPLE_FEATURE_KEY = 'people';

export interface PeopleState extends EntityState<PeopleEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const peopleAdapter = createEntityAdapter<PeopleEntity>();

export const fetchPeople = createAsyncThunk<PeopleEntity[]>(
  'people/fetchStatus',
  async (_, { rejectWithValue }) => {
    try {
      const peopleResponse: PeopleResponse[] = await searchService.getPeople();
      return peopleResponse.map((response) =>
        responseRemap<PeopleEntity>(response)
      );
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const initialPeopleState: PeopleState = peopleAdapter.getInitialState({
  loadingStatus: 'not loaded',
});

export const peopleSlice = createSlice({
  name: PEOPLE_FEATURE_KEY,
  initialState: initialPeopleState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state: PeopleState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchPeople.fulfilled,
        (state: PeopleState, action: PayloadAction<PeopleEntity[]>) => {
          peopleAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchPeople.rejected, (state: PeopleState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const peopleReducer = peopleSlice.reducer;

export const peopleActions = { fetchPeople, ...peopleSlice.actions };

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllPeople);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = peopleAdapter.getSelectors();

export const getPeopleState = (rootState: RootState): PeopleState =>
  rootState[PEOPLE_FEATURE_KEY];

export const selectAllPeople = createSelector(getPeopleState, selectAll);

export const selectPeopleEntities = createSelector(
  getPeopleState,
  selectEntities
);

export const shouldFetchPeople = createSelector(getPeopleState, (state): boolean => state.loadingStatus === 'not loaded' || state.loadingStatus === 'error');

export const peopleSelectors = {selectAllPeople, shouldFetchPeople};