describe('Flujo de compra en OpenCart', () => {
    it('Debería realizar una compra exitosa', () => {
      cy.visit('http://opencart.abstracta.us/') // Paso 1: Visitar la página principal
  
      // Paso 2: Agregar el primer producto al carrito
      cy.get(':nth-child(1) > .product-thumb > .image > a > img').click() // Hacer clic en el primer producto
      cy.get('#button-cart').click() // Agregar al carrito
      cy.get('h1 > a').click()
  
  
      // Paso 3: Agregar el segundo producto al carrito
      cy.get(':nth-child(2) > .product-thumb > .image > a > img').click() // Hacer clic en el segundo producto
      cy.get('#button-cart').click() // Agregar al carrito
  
      // Paso 4: Visualizar el carrito
      cy.get('#cart > button').click() // Ver el carrito
      cy.get('#cart > ul > li:nth-child(2) > div > p > a:nth-child(1)').click() // Hacer clic en "View Cart" (Ver Carrito)
  
      // Paso 5: Iniciar el proceso de checkout
      cy.get('.pull-right > .btn-primary').click() // Hacer clic en "Checkout"
  
      // Paso 6: Realizar el checkout como invitado
      cy.wait(2000) // Espera 2 segundos
      cy.get('#collapse-checkout-option > .panel-body > :nth-child(3) > label > input').check() // Seleccionar "Guest Checkout"

      cy.get('#button-account').click() // Continuar
  
      // Paso 7: Completar los datos del checkout
      cy.get('#input-payment-firstname').type('Nancy')
      cy.get('#input-payment-lastname').type('Sigcha')
      cy.get('#input-payment-email').type('kattysixs@gmail.com')
      cy.get('#input-payment-telephone').type('0983588752')
      cy.get('#input-payment-address-1').type('Aurelio Guerrero')
      cy.get('#input-payment-city').type('Quito')
      cy.get('#input-payment-postcode').type('3920')
      cy.get('#input-payment-country').select('Ecuador')
      cy.get('#input-payment-zone').select('Pichincha')
  
      // Paso 8: Continuar con el checkout
      cy.get('#button-guest').click() // Continuar a métodos de envío
      cy.get('#button-shipping-method').click() // Seleccionar el método de envío
      cy.get('input[name="agree"]').check() // Aceptar términos y condiciones
      cy.get('#button-payment-method').click() // Continuar a métodos de pago
  
      // Paso 9: Confirmar la compra
      cy.get('#button-confirm').click()
  
      // Paso 10: Verificar que la compra se completó
      cy.contains('Your order has been placed!').should('be.visible') // Verificar el mensaje de confirmación
    }) 
  })
  