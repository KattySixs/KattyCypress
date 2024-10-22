import Tienda from '../../support/Paginas_Flujo/Tienda';
import Producto from '../../support/Paginas_Flujo/Producto';
import VerCarrito from '../../support/Paginas_Flujo/VerCarrito';
import VerificarCheckout from '../../support/Paginas_Flujo/VerificarCheckout';

describe("Flujo de compra en OpenCart", () => {
    it("Realizar el flujo de compra de 2 productos como invitado", () => {
        //Dirigirse al sitio opencart
        Tienda.visit();
        
        // Agregar primer producto al carrito: MacBook
        Tienda.selectProductos("MacBook");
        Producto.AgregarAlCarrito();
        Producto.VerificarProducto("MacBook");
    
        // Volver a la página principal
        Tienda.RegresarPagina();
   
        // Agregar segundo producto al carrito: iPhone
        Tienda.selectProductos("iPhone");
        Producto.AgregarAlCarrito();
        Producto.VerificarProducto("iPhone");
   
        // Ver el carrito
        VerCarrito.AbrirCarrito();
   
        // Proceder al checkout
        VerCarrito.ProcederCheckout();

       //Se llama a cy.origin
       //NOTA: cy.origin tiene restricción para importar variables y dependencias
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
        VerificarCheckout.CompletadoCheckout();
    });
  });
