import { getEnv } from './get-env';

export function isMobile(): boolean {
  return getEnv('NX_APP_ENV') === 'APP';
}
