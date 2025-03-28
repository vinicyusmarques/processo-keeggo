import { faker } from '@faker-js/faker';
import ApiCarrinho from '../pageObjects/ApiCarrinho'
const api = new ApiCarrinho

let idProduct;
let idUser; // Definido aqui para usar em todo o teste
let payload; // Para armazenar o payload que será utilizado

before(() => {
    idUser = faker.number.int();  // Gerando um ID único para o usuário
    payload = {  // Definindo o payload que será reutilizado
        "userId": idUser,
        "productId": idProduct,
        "quantity": 1
    };
});

Given('que eu tenha o produto de ID {string} disponível', (id) => {
    idProduct = id
    api.getProduto(id)
})

When('a requisição para adicionar o produto ao carrinho for realizada com sucesso', () => {
    cy.log('ID do usuário:' + idUser)
    api.addProdutoCarrinho(payload)
})

Then('o produto deve existir no carrinho', () => {  
    api.getCarrinho(idUser)
    api.deleteCarrinho(idUser, 'Todos os itens do carrinho removidos com sucesso.')
}) 