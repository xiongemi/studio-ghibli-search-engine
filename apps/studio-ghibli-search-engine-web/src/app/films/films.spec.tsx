import { render } from '@testing-library/react';

import Films from './films';

describe('Films', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Films />);
    expect(baseElement).toBeTruthy();
  });
});
