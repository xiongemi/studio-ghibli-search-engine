import { PeopleResponse } from '@studio-ghibli-search-engine/services';

import { FilmResponse } from '../models/film-response.interface';

const isDevelopment = process.env.NODE_ENV === 'development';
const baseUrl =
  (isDevelopment ? 'http' : 'https') + process.env.NX_REQUEST_BASE_URL;

export async function getFilms(): Promise<FilmResponse[]> {
  const response: Response = await fetch(baseUrl + '/films', { method: 'GET' });
  if (response.ok) {
    return await response.json();
  }
  throw response;
}

export async function getPeople(): Promise<PeopleResponse[]> {
  const response: Response = await fetch(baseUrl + '/people', {
    method: 'GET',
  });
  if (response.ok) {
    return await response.json();
  }
  throw response;
}

export const searchService = { getFilms, getPeople };
