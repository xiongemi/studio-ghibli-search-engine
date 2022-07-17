import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Search } from './search';

const props = {};

storiesOf('Search', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <Search {...props} />);
