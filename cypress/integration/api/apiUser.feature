Feature: Cenários para validação de endpoints

  Scenario: Tentar criar usuário com email repetido
    Given que já sou cadastrado no qa commerce
    When realizo a requisição de criação com um usuário já cadastrado
    Then o cadastro não é finalizado e recebo a mensagem "Email já cadastrado."
