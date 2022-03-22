import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ResultListItem } from './result-list-item';

const props = {};

storiesOf('ResultListItem', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <ResultListItem {...props} />);
