import { device, element, by, expect } from 'detox';

describe('StudioGhibliSearchEngineMobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await waitFor(element(by.id('search-page'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('heading'))).toBeVisible();
    await expect(element(by.id('heading'))).toHaveText(
      'Studio Ghibli Search Engine'
    );
  });
});
