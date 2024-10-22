# Proyecto de Pruebas E2E con Cypress

#Este proyecto realiza pruebas automatizadas E2E (End-to-End) utilizando Cypress. La prueba cubre un flujo de compra en la página [OpenCart](http://opencart.abstracta.us/), donde se agregan 2 productos al carrito, se visualizan el carrito, se completa el checkout como invitado "Guest Checkout", y se finaliza la compra con éxito.

#Algunos pasos llaman a clases externas

## Requisitos Previos
- Instalar Node.js (https://nodejs.org/) (versión LTS recomendada)
- Opcional: Instalar visual studio code

## Configuración Cypress
- Desde la terminal del visual, dirigirse a la  la carpeta de trabajo
- Inicializar el proyecto con el comando: npm init -y
- Instalar cypress con el comando: npm install cypress
- Abrir cypress con el comando: npx cypress open
- Escoger la opción: E2E Configuration y clic en: "Continuar"
- Escoger el navegador donde se va a ejecutar la prueba y clic en: "Start E2E Testing in #####"

## Instalación del Proyecto
- Clonar el repositorio desde una terminal bash con el siguiente comando: git clone https://github.com/KattySixs/KattyCypress.git
- Localizarse en el repositorio clonado desde el terminal

##Ejecutar el proyecto
- Dirigirse a la siguiente ruta: cypress/e2e/Opencart
- Revisar el archivo de prueba: Fjulo de compra.cy.js
- Dirigirse a la siguiente ruta: cypress/support/Paginas_Flujo
- Revisar los archivos:
  Tienda.js
  Producto.js
  VerCarrito.js
  VerificarCheckout.js
- Establecer en la terminal el comando: npx cypress open
- Seleccionar el navegador que necesite. Ejemplo Chrome
- Seleccionar la carpeta Opencart y el archivo Fjulo de compraPrincipal.cy.js
- Revisar el resultado satisfactorio.
