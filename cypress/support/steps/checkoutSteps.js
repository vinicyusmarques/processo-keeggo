/* global Given, Then, When */
import CartPage from '../pageObjects/CartPage'
const cartPage = new CartPage

import HomePage from '../pageObjects/HomePage'
const homePage = new HomePage

import ProductPage from '../pageObjects/ProductPage'
const productPage = new ProductPage

import CheckoutPage from '../pageObjects/CheckoutPage'
const checkoutPage = new CheckoutPage

let responseData

Given('que o usuário adicione um produto ao carrinho', () => {
    homePage.acessarSite()
    homePage.clicarAdicionarAoCarrinho('Ecobag')
})

Given('acessar o carrinho e avançar o checkout', () => {
    cartPage.acessarCarrinho()
    cartPage.avancarCheckout()
})


When('preecnher os campos obrigatórios e selecionar o metodo de pagamento {string}', (metodoPagamento) => {
    cartPage.acessarCarrinho()
    cartPage.avancarCheckout()
    checkoutPage.preencherDadosDeEntrega()
    checkoutPage.selecionarMetodoPagamento(metodoPagamento)
    checkoutPage.aceiteTermosDeUso()
})

When('clicar em Finalizar Pedido', () => {
    checkoutPage.clicarFinalizarPedido()
})

Then('o pedido é finalizado e o usuário é redirecionado para página de sucesso', () => {
    cy.intercept('GET', '**/api/orders/**').as('getOrder')

    cy.wait('@getOrder').then((interception) => {
        // Salva a resposta da requisição
        responseData = interception.response.body;
        cy.log('Número da ordem:' + responseData.formattedOrderId)
        checkoutPage.validaNumeroOrdem(responseData.formattedOrderId)
        checkoutPage.validaValorOrdem(responseData.total_price)
    });
})

Then('devo ver a mensagem de erro e indicativo dos campos obrigatórios', () => {
    checkoutPage.mensagemErroCamposObrigatorios()
})