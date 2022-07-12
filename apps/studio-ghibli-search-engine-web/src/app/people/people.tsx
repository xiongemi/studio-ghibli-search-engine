import { Box, Divider, Grid, Typography } from '@mui/material';
import { FilmEntity, PeopleEntity } from '@studio-ghibli-search-engine/models';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import FilmCard from '../shared/film-card/film-card';
import Loading from '../shared/loading/loading';

import {
  mapDispatchToProps,
  mapStateToProps,
  PeopleProps,
} from './people.props';

export function People({
  loadingStatus,
  getPerson,
  getFilmById,
  fetchPeople,
}: PeopleProps) {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<PeopleEntity>();
  const [films, setFilms] = useState<FilmEntity[]>();

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    if (typeof id === 'string') {
      setPerson(getPerson(id));
    }
  }, [id, getPerson, loadingStatus]);

  useEffect(() => {
    if (!person) return;
    const filmsUnderPerson: FilmEntity[] = [];
    person.films.forEach((filmUrl) => {
      const filmId = filmUrl.split('/').pop();
      if (!filmId) {
        return;
      }
      const filmUnderPerson: FilmEntity | undefined = getFilmById(filmId);
      if (filmUnderPerson !== undefined) {
        filmsUnderPerson.push(filmUnderPerson);
      }
    });
    setFilms(filmsUnderPerson);
  }, [person, getFilmById]);

  return person ? (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {films && films?.length && (
            <img
              src={films[0].movieBanner}
              alt={films[0].title}
              className="w-100"
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h1">
            {person?.name}
          </Typography>
          <Typography variant="body1">
            Age: {person?.age || 'Unknown'}
          </Typography>
          <Typography variant="body1">
            Gender: {person?.gender || 'Unknown'}
          </Typography>
          <Typography variant="body1">
            Hair Color: {person?.hairColor || 'Unknown'}
          </Typography>
        </Grid>
      </Grid>
      {films && (
        <>
          <Divider sx={{ my: 3 }}>Films</Divider>
          <Box className="flex flex-col justify-center items-center md:flex-row md:justify-evenly">
            {films?.map((film) => (
              <FilmCard key={film.id} {...film} />
            ))}
          </Box>
        </>
      )}
    </>
  ) : (
    <Loading />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
