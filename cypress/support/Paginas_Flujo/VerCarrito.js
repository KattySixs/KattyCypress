class VerCarrito {
    AbrirCarrito() {
        cy.get("#cart").click();
        cy.contains("View Cart").click();
    }

    ProcederCheckout() {
        cy.get(".btn-primary").contains("Checkout").click();
    }
}

export default new VerCarrito();