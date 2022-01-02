import { PeopleEntity } from '@studio-ghibli-search-engine/models';
import { filmsSelectors, RootState } from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    getFilmTitle: (id: string) => filmsSelectors.selectFilmTitleById(id)(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type PeopleListItemProps = mapStateToPropsType & { people: PeopleEntity };

export { mapStateToProps };
export type { PeopleListItemProps };
