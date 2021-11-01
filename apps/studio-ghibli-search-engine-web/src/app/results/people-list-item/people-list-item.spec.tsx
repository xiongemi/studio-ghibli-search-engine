import { render } from '@testing-library/react';

import PeopleListItem from './people-list-item';

describe('PeopleListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleListItem />);
    expect(baseElement).toBeTruthy();
  });
});
