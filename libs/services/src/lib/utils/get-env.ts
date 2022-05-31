import Config from 'react-native-config';

export function getEnv(envName: string) {
  return process.env[envName] || Config?.[envName];
}
