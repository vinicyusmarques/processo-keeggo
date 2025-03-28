Feature: Cenários para validação de endpoints

  Scenario: Adicionar um produto com sucesso ao carrinho
    Given que eu tenha o produto de ID "2" disponível
    When a requisição para adicionar o produto ao carrinho for realizada com sucesso
    Then o produto deve existir no carrinho
