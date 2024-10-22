class Producto {
    AgregarAlCarrito() {
        cy.get("#button-cart").click();
    }

    VerificarProducto(NombreProd) {
        cy.contains(`You have added ${NombreProd} to your shopping cart!`).should("be.visible");
    }
}

export default new Producto();