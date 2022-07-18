import { mockPeopleEntity } from '@studio-ghibli-search-engine/models';

import { fetchPeople, peopleAdapter, peopleReducer } from './people.slice';

describe('people reducer', () => {
  it('should handle initial state', () => {
    const expected = peopleAdapter.getInitialState({
      loadingStatus: 'not loaded',
    });

    expect(peopleReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchPeoples', () => {
    let state = peopleReducer(undefined, fetchPeople.pending(''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        entities: {},
      })
    );

    state = peopleReducer(state, fetchPeople.fulfilled([mockPeopleEntity], ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        entities: { [mockPeopleEntity.id]: mockPeopleEntity },
      })
    );

    state = peopleReducer(state, fetchPeople.rejected(new Error('Uh oh'), ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { [mockPeopleEntity.id]: mockPeopleEntity },
      })
    );
  });
});
