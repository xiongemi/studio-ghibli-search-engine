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

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;


type FilmsProps = mapStateToPropsType;

export { mapStateToProps };
export type { FilmsProps };
