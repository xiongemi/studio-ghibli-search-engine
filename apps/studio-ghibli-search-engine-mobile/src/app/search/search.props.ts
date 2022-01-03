import { RootState, searchSelectors } from '@studio-ghibli-search-engine/store';

const mapStateToProps = (state: RootState) => {
  return {
    textToSearchInState: searchSelectors.getSearchText(state),
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type SearchProps = mapStateToPropsType;

export { mapStateToProps };
export type { SearchProps };
