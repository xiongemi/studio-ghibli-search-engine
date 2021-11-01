import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { FilmEntity } from '@studio-ghibli-search-engine/models';

export function FilmCard(film: FilmEntity) {
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
            {film.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;
