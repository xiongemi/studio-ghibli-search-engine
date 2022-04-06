import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Loading } from './loading';

const props = {};

storiesOf('Loading', module).add('Primary', () => <Loading {...props} />);
