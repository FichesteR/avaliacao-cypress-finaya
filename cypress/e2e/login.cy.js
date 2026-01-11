describe('SauceDemo - Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve logar com sucesso e exibir produtos', () => {
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });
});
