import { render } from '@testing-library/react-native';
import React from 'react';

import Search from './search';

describe('Search', () => {
  it('should render successfully', () => {
    const { container, getByTestId } = render(<Search />);
    expect(container).toBeTruthy();
    expect(getByTestId('search')).toBeTruthy();
  });
});
