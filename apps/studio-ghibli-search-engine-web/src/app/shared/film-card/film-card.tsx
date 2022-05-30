import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';
import { FilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import truncate from 'truncate';

import { AppRoutes } from '../../app-routes.enum';

export function FilmCard(film: FilmEntity) {
  const MyButton = React.forwardRef<HTMLAnchorElement, Partial<LinkProps>>(
    (props, ref) => (
      <RouterLink to={`${AppRoutes.film}/${film.id}`} {...props} ref={ref} />
    )
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={MyButton}>
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
      </CardActionArea>
      <CardActions>
        <Button
          startIcon={<CameraOutdoorIcon />}
          component="a"
          href={process.env.NX_HBO_STREAMING_URL}
          target="_blank"
        >
          HBO Max
        </Button>
        <Button
          startIcon={<CameraOutdoorIcon />}
          component="a"
          href={process.env.NX_NETFLIX_STREAMING_URL}
          target="_blank"
        >
          Netflix
        </Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;
