import { render } from '@testing-library/react';

import FilmCard from './film-card';

describe('FilmCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilmCard />);
    expect(baseElement).toBeTruthy();
  });
});
