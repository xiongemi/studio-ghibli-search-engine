import { List, Divider, Alert } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { AppRoutes } from '../app-routes.enum';
import Loading from '../shared/loading/loading';
import SearchForm from '../shared/search-form/search-form';

import ResultListItem from './result-list-item/result-list-item';
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
  const history = useHistory();

  const params = new URLSearchParams(useLocation().search);
  const searchParam = params.get('search');

  useEffect(() => {
    if (searchParam) {
      searchText(searchParam);
    }
  }, [searchText, searchParam,]);

  const submitSearchForm = (text: string) => {
    history.push(`${AppRoutes.results}?search=${text}`);
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
      {results && results.length ? (
        <List>
          {results.map((result) => (
            <>
              <ResultListItem listItem={result} key={result.id}/>
              <Divider variant="inset" component="li" key={result.id}/>
            </>
          ))}
        </List>
      ) : (
        <Alert variant="outlined" severity="info">
          Nothing found!
        </Alert>
      )}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
