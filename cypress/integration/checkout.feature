Feature: Checkout
    Como um usuário
    Quero ralizar o checkout do meu carrinho de compras

Scenario: Validação dos campos obrigatórios no checkout
    Given que o usuário adicione um produto ao carrinho
    And acessar o carrinho e avançar o checkout
    When clicar em Finalizar Pedido
    Then devo ver a mensagem de erro e indicativo dos campos obrigatórios

  Scenario: Checkout finalizado com sucesso
    Given que o usuário adicione um produto ao carrinho
    And acessar o carrinho e avançar o checkout
    When preecnher os campos obrigatórios e selecionar o metodo de pagamento "Boleto"
    And clicar em Finalizar Pedido
    Then o pedido é finalizado e o usuário é redirecionado para página de sucesso
