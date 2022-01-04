import { AppRegistry, StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';

import App from './app/App';

NativeTachyons.build({}, StyleSheet);
AppRegistry.registerComponent('main', () => App);
