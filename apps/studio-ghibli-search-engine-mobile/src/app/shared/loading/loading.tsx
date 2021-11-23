import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <ActivityIndicator animating={true} />
  );
}

export default Loading;
