class VerificarCheckout {
    
    CompletadoCheckout() {
        cy.contains("Your order has been placed!").should("be.visible");
    }
 }
 
 export default new VerificarCheckout();