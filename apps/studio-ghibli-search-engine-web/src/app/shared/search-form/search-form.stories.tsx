import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SearchForm } from './search-form';

const props = {};

storiesOf('SearchForm', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('Primary', () => <SearchForm {...props} />);
