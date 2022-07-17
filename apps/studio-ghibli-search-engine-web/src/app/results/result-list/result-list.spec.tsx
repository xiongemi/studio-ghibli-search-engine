import { render } from '@testing-library/react';

import ResultList from './result-list';

describe('ResultList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultList results={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
