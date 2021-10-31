import { fetchFilms, filmsAdapter, filmsReducer } from './films.slice';

describe('films reducer', () => {
  it('should handle initial state', () => {
    const expected = filmsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(filmsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchFilmss', () => {
    let state = filmsReducer(undefined, fetchFilms.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = filmsReducer(state, fetchFilms.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = filmsReducer(
      state,
      fetchFilms.rejected(new Error('Uh oh'), null, null)
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
