import CartElements from '../elements/CartElements'
const el = new CartElements
const url = Cypress.config("baseUrl")

class CartPage {

    limparCarrinho() {
        cy.request({
            method: 'DELETE',
            url: url + '/api/carrinho/1',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    }

    validaQtdCarrinho(qtd) {
        cy.get(el.botaoAddCarrinho()).click()
        cy.get(el.contadorQtdCarrinho())
            .should('have.text', qtd)
    }

    acessarCarrinho() {
        cy.get(el.itemNavBar())
            .contains('CARRINHO')
            .click()
    }

    containProduto(nomeProduto) {
        cy.get(el.nomeProduto())
            .contains(nomeProduto)
            .should('be.visible')
    }

    avancarCheckout() {
        cy.contains('Ir para o Checkout').click()
    }
}

export default CartPage;