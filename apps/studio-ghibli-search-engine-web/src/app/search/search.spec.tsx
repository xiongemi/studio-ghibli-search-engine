import { render } from '@testing-library/react';

import { Search } from './search';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Search', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Search />);
    expect(baseElement).toBeTruthy();
  });
});
