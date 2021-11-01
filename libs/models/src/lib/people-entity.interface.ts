export interface PeopleEntity {
  id: string;
  name: string;
  gender: string;
  age: string;
  eyeColor: string;
  hairColor: string;
  films: string[];
  species: string;
  url: string;
  similarity?: number;
}