import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react';

import { FilmListItem } from './film-list-item';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: any) => <div>{children}</div>,
}));

describe('FilmListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilmListItem film={mockFilmEntity} />);
    expect(baseElement).toBeTruthy();
  });
});
