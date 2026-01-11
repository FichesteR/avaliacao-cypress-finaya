// Comando customizado para realizar login
// Recebe um objeto user (username e password)
Cypress.Commands.add('login', (user) => {

  // Preenche o campo de usuário
  cy.get('[data-test="username"]').type(user.username);

  // Preenche o campo de senha
  cy.get('[data-test="password"]').type(user.password);

  // Clica no botão de login
  cy.get('[data-test="login-button"]').click();
});


// Comando customizado para login com sucesso
// Centraliza a lógica e evita repetição nos testes
Cypress.Commands.add('loginComSucesso', () => {

  // Carrega os dados do fixture users.json
  cy.fixture('users').then((users) => {

    // Usa o comando de login com usuário padrão
    cy.login(users.standard);

    // Valida que o usuário foi redirecionado para a página de produtos
    cy.url().should('include', '/inventory.html');
  });
});
