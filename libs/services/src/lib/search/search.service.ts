import { FilmResponse } from '../models/film-response.interface';
import { PeopleResponse } from '../models/people-response.interface';
import { getEnv } from '../utils/get-env';

const isDevelopment = process.env.NODE_ENV === 'development';
const useHttps = isDevelopment || getEnv('NX_APP_ENV') === 'MOBILE';
const baseUrl = (useHttps ? 'http' : 'https') + getEnv('NX_REQUEST_BASE_URL');

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
