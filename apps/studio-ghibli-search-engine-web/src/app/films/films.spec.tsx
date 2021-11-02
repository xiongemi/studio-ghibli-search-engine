import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import { render } from '@testing-library/react';

import { Films } from './films';

describe('Films', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Films films={[mockFilmEntity]} />);
    expect(baseElement).toBeTruthy();
  });
});
