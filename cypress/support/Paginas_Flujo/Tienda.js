class Tienda {
   //Página principal
    visit() {
        cy.visit("http://opencart.abstracta.us");
    }
    
    //Seleccionar productos
    selectProductos(NombreProd) {
        //cy.contains(NombreProd).click();  // Selecciona el producto por su nombre
        cy.get('[alt='+NombreProd+']').click();
    }
    //Volver a la página principal
    RegresarPagina() {
        cy.get("h1 > a").click();
    }
}

export default new Tienda();