/* global Given, Then, When */

import CartPage from '../pageObjects/CartPage'
const cartPage = new CartPage

import HomePage from '../pageObjects/HomePage'
const homePage = new HomePage

import ProductPage from '../pageObjects/ProductPage'
const productPage = new ProductPage

let responseData;

Given('que o usuário está na home page do e-commerce', () => {
   homePage.acessarSite()
})

Given("acessa a página do produto {string}", (nomeProduto) => {
   homePage.acessarProduto(nomeProduto)
})

When("o usuário inserir a quantidade {string} no campo de input e clicar em adicionar ao carrinho", (qtd) => {
   productPage.inserirInput(qtd)
   cartPage.validaQtdCarrinho(qtd)
})

When("clicar em adicionar ao carrinho do produto {string}", (nomeProduto) => {
   homePage.clicarAdicionarAoCarrinho(nomeProduto)
})

Then("ao acessar o carrinho o produto {string} é exibido", (nomeProduto) => {
   cartPage.acessarCarrinho()
   cartPage.containProduto(nomeProduto)
   cartPage.limparCarrinho()
})