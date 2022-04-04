import { storiesOf } from '@storybook/react-native';
import { mockPeopleEntity } from '@studio-ghibli-search-engine/models';
import React from 'react';

import { NavigationDecorator, StoreDecorator } from '../../../storybook/mocks';

import PeopleListItem from './people-list-item';

storiesOf('PeopleListItem', module)
  .addDecorator(StoreDecorator)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <PeopleListItem people={mockPeopleEntity} />);
