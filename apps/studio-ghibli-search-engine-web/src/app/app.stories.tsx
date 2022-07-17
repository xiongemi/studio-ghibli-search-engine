import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { App } from './app';

const props = {};

storiesOf('App', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <App {...props} />);
