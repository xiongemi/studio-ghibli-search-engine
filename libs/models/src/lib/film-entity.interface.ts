export interface FilmEntity {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  description: string;
  director: string;
  producer: string;
  releaseDate: string;
  runningTime: string;
  rtScore: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
  image: string;
  movieBanner: string;
  similarity?: number;
}