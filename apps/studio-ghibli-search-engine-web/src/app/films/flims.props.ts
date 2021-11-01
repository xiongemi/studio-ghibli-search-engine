import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import {
  fetchSearch,
  filmsSelectors,
  RootState,
  searchActions,
} from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    films: filmsSelectors.selectAllFilms(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    searchText(text: string) {
      dispatch(searchActions.fetchSearch(text));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type SearchProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { SearchProps };
