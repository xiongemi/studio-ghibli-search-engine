import { fetchPeople, peopleAdapter, peopleReducer } from './people.slice';

describe('people reducer', () => {
  it('should handle initial state', () => {
    const expected = peopleAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(peopleReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchPeoples', () => {
    let state = peopleReducer(undefined, fetchPeople.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = peopleReducer(
      state,
      fetchPeople.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = peopleReducer(
      state,
      fetchPeople.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
