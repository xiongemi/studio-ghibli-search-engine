import { render } from '@testing-library/react';

import Film from './film';

describe('Film', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Film />);
    expect(baseElement).toBeTruthy();
  });
});
