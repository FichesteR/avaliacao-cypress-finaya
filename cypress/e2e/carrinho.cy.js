// Suite de testes relacionada ao carrinho
describe('Carrinho - SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.loginComSucesso();
    });

    // Valida navegação e conteúdo do carrinho
    it('Deve acessar o carrinho com item adicionado', () => {

        // Adiciona um produto
        cy.get('.inventory_item')
            .first()
            .find('button')
            .click();

        // Acessa o carrinho
        cy.get('.shopping_cart_link').click();

        // Valida URL do carrinho
        cy.url().should('include', '/cart.html');

        // Valida que existe item no carrinho
        cy.get('.cart_item').should('exist');
    });
});
