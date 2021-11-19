import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  LoadingStatus,
  PeopleEntity,
} from '@studio-ghibli-search-engine/models';
import {
  PeopleResponse,
  responseRemap,
  searchService,
} from '@studio-ghibli-search-engine/services';

import { RootState } from '../root/root-state.interface';

export const PEOPLE_FEATURE_KEY = 'people';

export interface PeopleState extends EntityState<PeopleEntity> {
  loadingStatus: LoadingStatus;
  error?: string;
}

export const peopleAdapter = createEntityAdapter<PeopleEntity>();

export const fetchPeople = createAsyncThunk<
  PeopleEntity[],
  void,
  { state: RootState }
>('people/fetchStatus', async (_, { rejectWithValue, getState }) => {
  try {
    const rootState: RootState = getState();
    const people = selectAllPeople(rootState);
    if (people && people.length) {
      return people;
    }
    const peopleResponse: PeopleResponse[] = await searchService.getPeople();
    return peopleResponse.map((response) =>
      responseRemap<PeopleEntity>(response)
    );
  } catch (error) {
    return rejectWithValue({ error });
  }
});

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

const { selectAll, selectEntities, selectById } = peopleAdapter.getSelectors();

export const getPeopleState = (rootState: RootState): PeopleState =>
  rootState[PEOPLE_FEATURE_KEY];

export const selectAllPeople = createSelector(getPeopleState, selectAll);

export const selectPeopleEntities = createSelector(
  getPeopleState,
  selectEntities
);

export const selectPersonById = (id: string) =>
  createSelector(
    getPeopleState,
    (peopleState: PeopleState): PeopleEntity | undefined => {
      return selectById(peopleState, id) || undefined;
    }
  );

export const getPeopleLoadingStatus = createSelector(
  getPeopleState,
  (state): LoadingStatus => state.loadingStatus
);

export const peopleSelectors = {
  selectAllPeople,
  selectPersonById,
  getPeopleLoadingStatus
};
