import Ajv from 'ajv'

class ApiCarrinho {
    deleteCarrinho(idUser, message) {
        cy.request('DELETE', `api/carrinho/${idUser}`,
        ).then((response) => {
            this.validateStatusMensagem(response, 200, message)
        })
    }

    validateStatusMensagem(response, statusCode, message) {
        expect(response.status).to.eq(statusCode);
        if (message) {
            expect(response.body).to.have.property('message', message);
        }
    }

    comparaSchema(fixture, response) {
        cy.fixture(fixture).then((schema) => {
            const ajv = new Ajv()
            const validate = ajv.compile(schema)
            const valid = validate(response.body)

            if (!valid) {
                console.log(validate.errors)
            }

            expect(valid, 'Resposta válida de acordo com o schema').to.be.true
        })
    }

    getProduto(id) {
        cy.request('GET', `api/produtos/${id}`).then((response) => {
            this.validateStatusMensagem(response, 200)
            expect(response.status).to.eq(200)
            this.comparaSchema('schema-produto-GET', response)
        })
    }

    getCarrinho(idUser) {
        cy.request('GET', `api/carrinho/${idUser}`).then((response) => {
            expect(response.status).to.eq(200)
            this.comparaSchema('schema-carrinho-GET', response)
        })
    }

    addProdutoCarrinho(payload) {
        cy.request({
            method: 'POST',
            url: 'api/carrinho/',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            this.validateStatusMensagem(response, 201, 'Produto adicionado ao carrinho com sucesso.')
        })
    }
}

export default ApiCarrinho