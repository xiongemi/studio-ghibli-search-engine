import { filmsSelectors, RootState } from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    films: filmsSelectors.selectAllFilms(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type FilmsProps = mapStateToPropsType;

export { mapStateToProps };
export type { FilmsProps };
