import { mockFilmEntity } from '@studio-ghibli-search-engine/models';

import { fetchFilms, filmsAdapter, filmsReducer } from './films.slice';

describe('films reducer', () => {
  it('should handle initial state', () => {
    const expected = filmsAdapter.getInitialState({
      loadingStatus: 'not loaded',
    });

    expect(filmsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchFilmss', () => {
    let state = filmsReducer(undefined, fetchFilms.pending(''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        entities: {},
      })
    );

    state = filmsReducer(state, fetchFilms.fulfilled([mockFilmEntity], ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        entities: { [mockFilmEntity.id]: mockFilmEntity },
      })
    );

    state = filmsReducer(state, fetchFilms.rejected(new Error('Uh oh'), ''));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { [mockFilmEntity.id]: mockFilmEntity },
      })
    );
  });
});
