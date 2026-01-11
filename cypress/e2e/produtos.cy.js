// Suite de testes relacionada aos produtos
describe('Produtos - SauceDemo', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        cy.visit('/');
        cy.loginComSucesso();
    });

    // Valida que a lista de produtos é exibida
    it('Deve exibir a lista de produtos', () => {

        cy.get('.inventory_item')
            .should('exist')
            .and('have.length.greaterThan', 0);
    });

    // Valida adição de produto ao carrinho
    it('Deve adicionar um produto ao carrinho', () => {

        // Adiciona o primeiro produto da lista
        cy.get('.inventory_item')
            .first()
            .find('button')
            .click();

        // Valida badge do carrinho
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('contain', '1');
    });
});
