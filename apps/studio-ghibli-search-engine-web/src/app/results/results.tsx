import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { AppRoutes } from '../app-routes.enum';
import Loading from '../shared/loading/loading';
import SearchForm from '../shared/search-form/search-form';

import ResultList from './result-list/result-list';
import {
  mapDispatchToProps,
  mapStateToProps,
  ResultsProps,
} from './results.props';

export function Results({
  searchText,
  results,
  isSearchLoading,
}: ResultsProps) {
  const navigate = useNavigate();

  const params = new URLSearchParams(useLocation().search);
  const searchParam = params.get('search');

  useEffect(() => {
    if (searchParam) {
      searchText(searchParam);
    }
  }, [searchText, searchParam]);

  const submitSearchForm = (text: string) => {
    navigate(`${AppRoutes.results}?search=${text}`);
  };

  return isSearchLoading ? (
    <Loading />
  ) : (
    <>
      <SearchForm
        onSubmit={submitSearchForm}
        searchText={searchParam || ''}
        stackDirection="row"
      ></SearchForm>
      {results && <ResultList results={results} />}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
