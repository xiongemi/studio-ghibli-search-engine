import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react-native';
import React from 'react';

import { Films } from './films';

describe('Films', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Films films={[mockFilmEntity]} fetchFilms={jest.fn()} />
    );
    expect(container).toBeTruthy();
  });
});
