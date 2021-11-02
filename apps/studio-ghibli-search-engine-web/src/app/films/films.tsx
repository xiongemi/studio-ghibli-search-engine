
import { Grid } from '@mui/material';


import FilmCard from './film-card/film-card';
import { FilmsProps } from './flims.props';

export function Films({films}: FilmsProps) {
  return (
    <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item xs={12} md={4} key={film.id}>
            <FilmCard {...film} />
          </Grid>
        ))}
      </Grid>
  );
}

export default Films;
