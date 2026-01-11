// Suite de testes relacionada ao login
describe('Login - SauceDemo', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        // Acessa a página inicial (usa baseUrl)
        cy.visit('/');
    });

    // Cenário de login com sucesso
    it('Deve realizar login com sucesso', () => {

        // Carrega dados do fixture
        cy.fixture('users').then((users) => {

            // Executa login com usuário válido
            cy.login(users.standard);
        });

        // Valida que o título da página de produtos é exibido
        cy.get('.title')
            .should('be.visible')
            .and('have.text', 'Products');
    });

    // Cenário de login com usuário bloqueado
    it('Não deve permitir login com usuário bloqueado', () => {

        // Carrega dados do fixture
        cy.fixture('users').then((users) => {
            // Executa login com usuário bloqueado
            cy.login(users.locked);
        });

        // Valida mensagem de erro
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'locked out');
    });
});
