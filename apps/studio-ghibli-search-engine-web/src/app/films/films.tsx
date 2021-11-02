
import { Grid } from '@mui/material';
import { FilmEntity } from '@studio-ghibli-search-engine/models';

import FilmCard from './film-card/film-card';

export function Films(films: FilmEntity[]) {
  return (
    <Grid container spacing={2}>
        {films.map((film) => (
          <Grid item xs={12} md={4}>
            <FilmCard {...film} />
          </Grid>
        ))}
      </Grid>
  );
}

export default Films;
