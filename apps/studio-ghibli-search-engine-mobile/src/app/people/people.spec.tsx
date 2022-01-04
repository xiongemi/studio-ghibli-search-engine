import { render } from '@testing-library/react';

import { People } from './people';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'random id' }),
}));

describe('People', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <People
        loadingStatus={'loaded'}
        getFilmById={jest.fn()}
        getPerson={jest.fn()}
        fetchPeople={jest.fn()}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
