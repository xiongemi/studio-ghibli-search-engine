import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  filmsActions,
  filmsSelectors,
  RootState,
} from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    getFilm: (id: string) => filmsSelectors.selectFilmById(id)(state),
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

type FilmProps = mapStateToPropsType & mapDispatchToPropsType;

export { mapStateToProps, mapDispatchToProps };
export type { FilmProps };
