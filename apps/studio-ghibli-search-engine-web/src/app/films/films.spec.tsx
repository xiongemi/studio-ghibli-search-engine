import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react';

import { Films } from './films';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: any) => <div>{children}</div>,
}));

describe('Films', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Films films={[mockFilmEntity]} fetchFilms={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
