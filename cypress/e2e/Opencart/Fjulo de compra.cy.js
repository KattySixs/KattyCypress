describe("Flujo de compra en OpenCart", () => {
    it("Realizar el flujo de compra de 2 productos como invitado", () => {
        //Dirigirse al sitio opencart
        cy.visit("http://opencart.abstracta.us");
        
        // Agregar primer producto al carrito: MacBook
        cy.get('[alt="MacBook"]').click();
        cy.get("#button-cart").click();
        cy.contains("You have added MacBook to your shopping cart!").should("be.visible");
    
        // Volver a la página principal
        cy.get("h1 > a").click();
   
        // Agregar segundo producto al carrito: iPhone
        cy.get('[alt="iPhone"]').click();
        cy.get("#button-cart").click();
   
        // Ver el carrito
        cy.get("#cart").click();
        cy.contains("View Cart").click();
   
        // Proceder al checkout
        cy.get(".btn-primary").contains("Checkout").click();
   
        //Se llama a cy.origin
        cy.origin("https://opencart.abstracta.us", () => {
            //Step 1: Checkout Options y seleccionar el checkout como invitado
            cy.get('input[value="guest"]').check();
            cy.get("#button-account").click();

            //Step 2: Billing Details y Step 3
            cy.get("#input-payment-firstname").type("Katherine");
            cy.get("#input-payment-lastname").type("Sigcha");
            cy.get("#input-payment-email").type("kattyta_limo89@hotmail.com");
            cy.get("#input-payment-telephone").type("0983588752");
            cy.get("#input-payment-address-1").type("123 abc");
            cy.get("#input-payment-city").type("Quito");
            cy.get("#input-payment-postcode").type("111222");
            cy.get("#input-payment-country").select("Ecuador");
            cy.get("#input-payment-zone").select("Pichincha");
            cy.get("#button-guest").click();
     
            // Step4: delivery metod
            cy.get("#button-shipping-method").click();
      
            //Step5: Paymenth metod y clic en términos y condiciones
            cy.get('.pull-right > [type="checkbox"]').click();
            cy.get("#button-payment-method").click();
      
            //Step 6: Confirmar orden
            cy.get("#button-confirm").click();
        });
        
        // Verificar que el pedido se ha completado
        cy.contains("Your order has been placed!").should("be.visible");
    });
  });