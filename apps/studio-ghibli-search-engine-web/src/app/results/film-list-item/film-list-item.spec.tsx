import { render } from '@testing-library/react';

import FilmListItem from './film-list-item';

describe('FilmListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilmListItem />);
    expect(baseElement).toBeTruthy();
  });
});
