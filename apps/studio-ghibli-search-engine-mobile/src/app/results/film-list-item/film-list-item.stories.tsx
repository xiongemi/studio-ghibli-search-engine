import { storiesOf } from '@storybook/react-native';
import { mockFilmEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';

import { NavigationDecorator } from '../../../storybook/mocks/navigation';

import FilmListItem from './film-list-item';

storiesOf('FilmListItem', module)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <FilmListItem film={mockFilmEntity} />);
