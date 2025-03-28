import { faker } from '@faker-js/faker'

import ApiUser from '../pageObjects/ApiUser'
const api = new ApiUser

let payloadUser

before(() => {
    payloadUser = {
        "name": faker.person.firstName(),
        "email": faker.person.firstName()+'teste@mailinator.com',
        "password": faker.number.octal(),
        "isAdmin": false
    }
})

Given('que já sou cadastrado no qa commerce', () => {
    api.criarUser(payloadUser).then((response) => {
        api.validateStatusMensagem(response, 201, 'Usuário criado com sucesso.')
    })
})

When('realizo a requisição de criação com um usuário já cadastrado', () => {
    api.criarUser(payloadUser).as('response')
})


Then('o cadastro não é finalizado e recebo a mensagem {string}', (message) => {
    cy.get('@response').then((response) => {
        api.validateStatusMensagem(response, 400, message)
    });
})
