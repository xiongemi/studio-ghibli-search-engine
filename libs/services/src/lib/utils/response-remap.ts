import { Dictionary } from '@reduxjs/toolkit';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

/**
 * This function remaps response object's keys to all camel case
 * @param response 
 * @returns response remapped with camel case key
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function responseRemap<U>(response: Dictionary<any>): U {
  return mapKeys(response, (_, key) => {
    return camelCase(key);
  }) as U;
}
