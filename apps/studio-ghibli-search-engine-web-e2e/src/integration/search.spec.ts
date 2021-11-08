describe('Search Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should do a search', () => {
    cy.search('kiki');

    cy.url().should('contain', '/results?search=kiki');
  });
});