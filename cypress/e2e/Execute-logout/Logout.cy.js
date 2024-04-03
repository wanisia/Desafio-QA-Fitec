/// <reference types ="Cypress"/>

describe('Execute Logout', () => {
    it('Logout should be successfully executed', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
        //Execute logout
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('.bm-menu-wrap').should('be.visible')
        cy.get('[data-test="logout-sidebar-link"]').click()

        cy.get('.login_logo').should('contain' , 'Swag Labs')

    });        
});
