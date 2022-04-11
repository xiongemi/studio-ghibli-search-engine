import { device, element, by, expect } from 'detox';

describe('Search', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a list of results and go to film details', async () => {
    await waitFor(element(by.id('search-page')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('search-input'))).toBeVisible();
    await element(by.id('search-input')).clearText();
    await element(by.id('search-input')).typeText('totoro');
    await element(by.id('search-button')).tap();
    await waitFor(element(by.id('results-page')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('result-list-item')).atIndex(0).tap();
    await waitFor(element(by.id('film-page')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('title'))).toHaveText(
      'My Neighbor Totoro'
    );
  });
});
