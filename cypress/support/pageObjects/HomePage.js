import HomeElements from '../elements/HomeElements'
const el = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    acessarSite() {
        cy.visit(url)
        cy.intercept('**/api/carrinho/**').as('loadPage')
        cy.wait('@loadPage')
    }

    acessarProduto(nomeProduto) {
        cy.get(el.nomeProduto())
            .contains(nomeProduto)
            .should('be.visible')
            .click()
        cy.wait('@loadPage')
    }

    clicarAdicionarAoCarrinho(nomeProduto) {
        cy.get(el.cardProduto())
            .contains(nomeProduto)  
            .parents(el.cardProduto())  // Navega até o elemento pai
            .find(el.botaoAddCarrinho())  // Encontra o botão "Adicionar ao Carrinho"
            .click()
    }

}
export default HomePage