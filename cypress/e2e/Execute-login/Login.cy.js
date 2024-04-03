/// <reference types ="Cypress"/>

describe('Execute Login', () => {
    it('Login should be successfully performed', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain' , 'Products')
    });      
});
