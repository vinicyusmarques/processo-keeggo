Feature: Adicionar produtos ao carrinho
    Como um usuário
    Quero adicionar produtos ao meu carrinho de compras

  Scenario: Adicionar produtos ao carrinho pelo input
    Given que o usuário está na home page do e-commerce
    And acessa a página do produto "Ecobag"
    When o usuário inserir a quantidade "2" no campo de input e clicar em adicionar ao carrinho
    Then ao acessar o carrinho o produto "Ecobag" é exibido

  Scenario: Adicionar produtos ao carrinho pela home page
    Given que o usuário está na home page do e-commerce
    When clicar em adicionar ao carrinho do produto "Ecobag"
    Then ao acessar o carrinho o produto "Ecobag" é exibido