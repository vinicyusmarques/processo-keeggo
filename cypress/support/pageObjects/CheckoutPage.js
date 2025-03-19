import CheckoutElements from '../elements/CheckoutElements'
const el = new CheckoutElements
import { faker } from '@faker-js/faker'
const url = Cypress.config("baseUrl")

class CheckoutPage {
    preencherDadosDeEntrega() {
        cy.get(el.primeiroNome()).type(faker.person.firstName())
        cy.get(el.sobrenome()).type(faker.person.lastName())
        cy.get(el.endereco()).type(faker.location.street())
        cy.get(el.numero()).type(faker.number.int(1000))
        cy.get(el.cep()).type(faker.location.zipCode('########'))
        cy.get(el.telefone()).type(faker.phone.number({ style: 'international' }))
        cy.get(el.email()).type(faker.internet.email())
    }

    selecionarMetodoPagamento(metodoPagamento) {
        cy.contains(el.labelMetodoPagamento(), metodoPagamento)
            .prev(el.checkboxMetodoPagamento()) // Encontra o input anterior ao label
            .check()
    }

    aceiteTermosDeUso() {
        cy.get(el.checkboxTermosDeUso()).check()

    }

    clicarFinalizarPedido() {
        cy.contains('Finalizar Pedido').click()
    }

    mensagemErroCamposObrigatorios() {
        cy.get(el.alertaObrigatoriedade()).should('have.text', 'Por favor, preencha todos os campos obrigatório marcados com asteriscos!')

        const camposObrigatorios = [
            'first-name',
            'last-name',
            'address',
            'number',
            'cep',
            'email',
            'terms',
        ]

        camposObrigatorios.forEach(campo => {
            cy.get(`#${campo}`).should('have.class', 'is-invalid')
            cy.get(`#${campo}`)
                .siblings('.invalid-feedback')  // A mensagem de erro fica em um sibling do campo
                .should('be.visible')  
                .and('contain', 'Este campo é obrigatório.')
        })
    }

    validaNumeroOrdem(numeroOrdem) {
        cy.contains(el.containerNumeroPedido(), numeroOrdem)
    }

    validaValorOrdem(precoTotal){
        cy.contains(el.containerNumeroPedido(), precoTotal)
    }
}

export default CheckoutPage;