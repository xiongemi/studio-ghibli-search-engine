import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import FilmCard from './film-card/film-card';
import SearchForm from './search-form/search-form';
import {
  mapDispatchToProps,
  mapStateToProps,
  SearchProps,
} from './search.props';

export function Search({ searchText, films }: SearchProps) {
  useEffect(() => {
    searchText();
  }, [searchText]);

  return (
    <>
      <SearchForm></SearchForm>
      <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item xs={12} md={4}>
            <FilmCard {...film} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
