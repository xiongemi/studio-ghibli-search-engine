import React from 'react';
import { render } from '@testing-library/react-native';

import ResultListItem from './result-list-item';

describe('ResultListItem', () => {
  it('should render successfully', () => {
    const { container } = render(<ResultListItem />);
    expect(container).toBeTruthy();
  });
});
