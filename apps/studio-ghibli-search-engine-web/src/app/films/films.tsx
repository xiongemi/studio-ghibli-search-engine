import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import FilmCard from '../shared/film-card/film-card';

import { FilmsProps, mapDispatchToProps, mapStateToProps } from './flims.props';

export function Films({ films, fetchFilms }: FilmsProps) {
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  return (
    <Grid container spacing={2}>
      {films?.map((film) => (
        <Grid item xs={12} sm={6} md={4} key={film.id}>
          <FilmCard {...film} />
        </Grid>
      ))}
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Films);
