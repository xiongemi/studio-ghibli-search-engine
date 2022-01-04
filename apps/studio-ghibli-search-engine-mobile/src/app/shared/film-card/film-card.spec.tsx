import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react';

import FilmCard from './film-card';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: any) => <div>{children}</div>,
}));

describe('FilmCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilmCard {...mockFilmEntity} />);
    expect(baseElement).toBeTruthy();
  });
});
