import { render } from '@testing-library/react-native';

import { People } from './people';

describe('People', () => {
  it('should render successfully', () => {
    const { container } = render(
      <People
        loadingStatus={'loaded'}
        getFilmById={jest.fn()}
        getPerson={jest.fn()}
        fetchPeople={jest.fn()}
      />
    );
    expect(container).toBeTruthy();
  });
});
