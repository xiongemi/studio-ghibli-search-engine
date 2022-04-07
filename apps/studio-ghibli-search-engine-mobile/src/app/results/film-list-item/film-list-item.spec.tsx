import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react-native';
import React from 'react';

import { FilmListItem } from './film-list-item';

describe('FilmListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<FilmListItem film={mockFilmEntity} />);
    expect(container).toBeTruthy();
  });
});
