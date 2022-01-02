import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.mock('react-native-config', () => ({}));
