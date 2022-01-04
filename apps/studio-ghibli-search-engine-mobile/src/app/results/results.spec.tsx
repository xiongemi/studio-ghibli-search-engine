import { render } from '@testing-library/react-native';
import React from 'react';

import Results from './results';

describe('Results', () => {
  it('should render successfully', () => {
    const { container } = render(<Results />);
    expect(container).toBeTruthy();
  });
});
