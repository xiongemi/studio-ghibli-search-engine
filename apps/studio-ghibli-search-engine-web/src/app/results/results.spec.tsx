import { render } from '@testing-library/react';

import Results from './results';

describe('Results', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Results />);
    expect(baseElement).toBeTruthy();
  });
});
