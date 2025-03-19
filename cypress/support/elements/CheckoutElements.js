class CheckoutElements {
    primeiroNome = () => { return 'input#first-name' }
  
    sobrenome = () => { return 'input#last-name' }

    endereco = () => { return 'input#address' }

    numero = () => { return 'input#number' }

    cep  = () => { return 'input#cep' }

    telefone  = () => { return 'input#phone' }

    email  = () => { return 'input#email' }

    labelMetodoPagamento = () => { return 'label.form-check-label' }

    checkboxMetodoPagamento  = () => { return 'input[name="payment-method"]' }

    checkboxTermosDeUso  = () => { return 'input#terms' }

    alertaObrigatoriedade  = () => { return 'div.alert-danger' }

    containerNumeroPedido  = () => { return 'main.container div#order-status p strong' }
  }
  
  export default CheckoutElements;