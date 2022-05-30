import { AppRegistry, StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';

import App from './storybook/toggle-storybook';

NativeTachyons.build({}, StyleSheet);
AppRegistry.registerComponent('StudioGhibliSearchEngineMobile', () => App);
