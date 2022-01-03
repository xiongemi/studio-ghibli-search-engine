import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import truncate from 'truncate';

import { AppRoutes } from '../../app-routes.enum';

export function FilmCard(film: FilmEntity) {
  const MyButton = React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>(
    (props, ref) => (
      <RouterLink to={`${AppRoutes.film}/${film.id}`} {...props} innerRef={ref} />
    )
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={film.image}
        alt={film.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {film.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncate(film.description, 200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component="a"
          href={process.env.NX_HBO_STREAMING_URL}
          target="_blank"
        >
          Watch on HBO Max
        </Button>
        <Button
          component="a"
          href={process.env.NX_NETFLIX_STREAMING_URL}
          target="_blank"
        >
          Watch on Netflix
        </Button>
        <Button component={MyButton} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;
