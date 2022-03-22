import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { FilmListItem } from './film-list-item';

const props = {};

storiesOf('FilmListItem', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <FilmListItem {...props} />);
