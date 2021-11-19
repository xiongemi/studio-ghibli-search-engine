import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { filmsActions, filmsSelectors, RootState } from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    films: filmsSelectors.selectAllFilms(state),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>
) => {
  return {
    fetchFilms() {
      dispatch(filmsActions.fetchFilms());
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type FilmsProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { FilmsProps };
