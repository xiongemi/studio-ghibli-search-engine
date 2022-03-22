import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { App } from './App';

const props = {};

storiesOf('App', module)
  .add('Primary', () => <App {...props} />);
