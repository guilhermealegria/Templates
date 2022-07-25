/// <reference types="Cypress" />


const elements = require('../elements/ExemploElement');
class ExemploPage {
    acessarPagina(){
        cy.visit(elements.ExemploElement.URL)
    }

    verificarBarradePesquisa(){
        cy.get(elements.ExemploElement.searchBar).should('be.visible')
    }

}

export default ExemploPage;