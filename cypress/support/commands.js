Cypress.Commands.add('login', (user) => {
  cy.get('[data-test="username"]').type(user.username);
  cy.get('[data-test="password"]').type(user.password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('loginComSucesso', () => {
  cy.fixture('users').then((users) => {
    cy.login(users.standard);
    cy.url().should('include', '/inventory.html');
  });
});
