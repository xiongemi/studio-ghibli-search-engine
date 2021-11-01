import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  filmsSelectors,
  RootState,
  searchActions,
  searchSelectors,
  searchSlice,
} from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    results: searchSelectors.getSearchResults(state),
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

type ResultsProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { ResultsProps };
