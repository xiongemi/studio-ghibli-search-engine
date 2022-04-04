import { storiesOf } from '@storybook/react-native';
import {
  mockFilmEntity,
  mockPeopleEntity,
} from '@studio-ghibli-search-engine/models';
import React from 'react';

import { NavigationDecorator, StoreDecorator } from '../../../storybook/mocks';

import { ResultListItem } from './result-list-item';

storiesOf('ResultListItem', module)
  .addDecorator(NavigationDecorator)
  .addDecorator(StoreDecorator)
  .add('Film', () => <ResultListItem listItem={mockFilmEntity} />)
  .add('People', () => <ResultListItem listItem={mockPeopleEntity} />);
