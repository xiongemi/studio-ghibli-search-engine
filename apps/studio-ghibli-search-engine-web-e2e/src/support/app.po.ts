export const getSearchInput = () => cy.get('#search-text');
export const getSearchSubmitButton = () =>
  cy.get('[data-testid="search-submit-button"]');
