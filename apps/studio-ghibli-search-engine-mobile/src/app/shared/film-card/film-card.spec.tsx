import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react-native';
import React from 'react';

import FilmCard from './film-card';

describe('FilmCard', () => {
  it('should render successfully', () => {
    const { container } = render(<FilmCard {...mockFilmEntity} />);
    expect(container).toBeTruthy();
  });
});
