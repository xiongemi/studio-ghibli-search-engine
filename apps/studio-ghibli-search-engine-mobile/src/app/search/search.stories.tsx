import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { NavigationDecorator } from '../../storybook/mocks/navigation';
import { StoreDecorator } from '../../storybook/mocks/store';

import Search from './search';

storiesOf('Search', module)
  .addDecorator(NavigationDecorator)
  .addDecorator(StoreDecorator)
  .add('Primary', () => <Search />);
