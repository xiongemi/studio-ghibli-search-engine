import { connect } from 'react-redux';
import { List, Divider } from '@mui/material';

import SearchForm from '../shared/search-form/search-form';

import ResultListItem from './result-list-item/result-list-item';
import {
  mapDispatchToProps,
  mapStateToProps,
  ResultsProps,
} from './results.props';

export function Results({ searchText, results }: ResultsProps) {
  return (
    <>
      <SearchForm onSubmit={searchText}></SearchForm>
      <List>
        {results.map((result) => (
        <ListItemButton>
          <ResultListItem {...result} />
          <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
