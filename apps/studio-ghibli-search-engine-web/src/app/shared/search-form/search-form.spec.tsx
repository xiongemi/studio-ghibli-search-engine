import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import SearchForm from './search-form';

describe('Search Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchForm searchText={'random search text'} onSubmit={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should not have accessibility violations', async () => {
    const { container } = render(
      <SearchForm searchText={'random search text'} onSubmit={jest.fn()} />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
