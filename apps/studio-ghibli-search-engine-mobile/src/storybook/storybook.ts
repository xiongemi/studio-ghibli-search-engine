import { configure, getStorybookUI } from '@storybook/react-native';

import { loadStories } from '../../../../story-loader';

configure(loadStories(), module, false);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
