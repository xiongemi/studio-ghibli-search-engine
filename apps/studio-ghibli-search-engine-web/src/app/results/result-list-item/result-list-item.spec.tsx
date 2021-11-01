import { render } from '@testing-library/react';

import ResultListItem from './result-list-item';

describe('ResultListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultListItem />);
    expect(baseElement).toBeTruthy();
  });
});
