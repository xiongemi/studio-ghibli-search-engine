import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import { NavigationDecorator } from './mocks/navigation';

export const decorators = [NavigationDecorator, withBackgrounds];
