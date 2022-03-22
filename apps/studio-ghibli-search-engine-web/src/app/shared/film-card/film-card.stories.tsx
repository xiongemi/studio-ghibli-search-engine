import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { FilmCard } from './film-card';

const props = {};

storiesOf('FilmCard', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <FilmCard {...props} />);
