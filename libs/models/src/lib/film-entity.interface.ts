export interface FilmEntity {
  id: string;
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  description: string;
  director: string;
  producer: string;
  releaseDate: number;
  runningTime: number;
  rtScore: number;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
  image: string;
  movieBanner: string;
}