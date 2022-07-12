import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import { Button, Grid, Typography } from '@mui/material';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../shared/loading/loading';

import { FilmProps, mapDispatchToProps, mapStateToProps } from './film.props';

export function Film({ getFilm, fetchFilms }: FilmProps) {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<FilmEntity>();

  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);

  useEffect(() => {
    if (typeof id === 'string') {
      setFilm(getFilm(id));
    }
  }, [id, getFilm]);

  return film ? (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <img src={film.image} alt={film.title} className="w-100" />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h5" component="h1">
          {film.title}
        </Typography>
        <Typography variant="subtitle1">
          {film.originalTitle} / {film.originalTitleRomanised}
        </Typography>
        <Typography variant="body1">Release: {film.releaseDate}</Typography>
        <Typography variant="body1">Director: {film.director}</Typography>
        <Typography variant="body1">Producer: {film.producer}</Typography>
        <Typography variant="body1">
          Running Time: {film.runningTime} minutes
        </Typography>
        <Typography variant="body1">
          Rotten Tomatoes Score: {film.rtScore}
        </Typography>
        <Button
          startIcon={<CameraOutdoorIcon />}
          component="a"
          href={process.env.NX_HBO_STREAMING_URL}
          target="_blank"
        >
          Watch on HBO Max
        </Button>
        <Button
          startIcon={<CameraOutdoorIcon />}
          component="a"
          href={process.env.NX_NETFLIX_STREAMING_URL}
          target="_blank"
        >
          Watch on Netflix
        </Button>
      </Grid>
      <Grid item md={12}>
        <Typography variant="h6" component="h2">
          Plot
        </Typography>
        <Typography variant="body1">{film.description}</Typography>
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
