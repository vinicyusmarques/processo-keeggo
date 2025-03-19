import ProductElements from '../elements/ProductElements'
const el = new ProductElements
const url = Cypress.config("baseUrl")

class Product {
    inserirInput(qtd) {
        cy.get(el.inputQuantidade())
            .clear()
            .type(qtd)
    }
}

export default Product