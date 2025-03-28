class ApiUser {
    criarUser(payload) {
        return cy.request({
            method: 'POST',
            url: `/api/users`,
            body: payload,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    validateStatusMensagem(response, statusCode, message) {
        expect(response.status).to.eq(statusCode);
        if (message) {
            expect(response.body).to.have.property('message', message);
        }
    }
}

export default ApiUser