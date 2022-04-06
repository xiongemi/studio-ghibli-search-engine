import React from 'react';
import { render } from '@testing-library/react-native';

import Results from './results';

describe('Results', () => {
  it('should render successfully', () => {
    const { container } = render(<Results />);
    expect(container).toBeTruthy();
  });
});
