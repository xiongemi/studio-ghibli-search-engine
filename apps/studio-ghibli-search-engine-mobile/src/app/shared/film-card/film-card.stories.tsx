import { storiesOf } from '@storybook/react-native';
import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';

import { NavigationDecorator } from '../../../storybook/mocks/navigation';

import { FilmCard } from './film-card';

storiesOf('FilmCard', module)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <FilmCard {...mockFilmEntity} />);
