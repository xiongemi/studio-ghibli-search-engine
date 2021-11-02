import { render } from '@testing-library/react';

import People from './people';

describe('People', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<People />);
    expect(baseElement).toBeTruthy();
  });
});
