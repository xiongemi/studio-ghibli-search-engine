import { device, element, by, expect } from 'detox';

describe('Films', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should redirect to all films page', async () => {
    await waitFor(element(by.id('search-page')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('all-films-button'))).toBeVisible();
    await element(by.id('all-films-button')).tap();
    await waitFor(element(by.id('all-films-page')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
