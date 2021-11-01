import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '../app-routes.enum';

import SearchForm from '../shared/search-form/search-form';
import {
  mapDispatchToProps,
  mapStateToProps,
  SearchProps,
} from './search.props';

export function Search({ searchText, films }: SearchProps) {
  const history = useHistory();

  const submitSearchForm = (text: string) => {
    history.push(`${AppRoutes.results}?search=${text}`);
    searchText(text);
  }
  return (
    <>
      <SearchForm onSubmit={submitSearchForm}></SearchForm>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
