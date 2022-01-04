import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  filmsSelectors,
  peopleActions,
  peopleSelectors,
  RootState,
} from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    getPerson: (id: string) => peopleSelectors.selectPersonById(id)(state),
    getFilmById: (id: string) => filmsSelectors.selectFilmById(id)(state),
    loadingStatus: peopleSelectors.getPeopleLoadingStatus(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    fetchPeople() {
      dispatch(peopleActions.fetchPeople());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type PeopleProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { PeopleProps };
