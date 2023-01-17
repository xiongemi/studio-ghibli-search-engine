import { configure, getStorybookUI } from '@storybook/react-native';

import { loadStories } from '../../../../.storybook/story-loader';

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI();

export default StorybookUIRoot;
