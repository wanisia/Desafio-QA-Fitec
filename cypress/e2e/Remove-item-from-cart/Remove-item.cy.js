describe('Remove item from cart', () => {
    it('Add Product', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain' , 'Products')
        
        //Add product
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        //Validate QTY of items in the cart
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="title"]').should('contain' , 'Your Cart')

        cy.get('.cart_item').should('have.length', 3)
        cy.contains('.cart_item', 'Sauce Labs Fleece Jacket').should('exist')
        cy.contains('.cart_item', 'Sauce Labs Bolt T-Shirt').should('exist')
        cy.contains('.cart_item', 'Sauce Labs Onesie').should('exist')    
        
        //Return to product screen
        cy.get('[data-test="continue-shopping"]').click()

        //Remove item from cart
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()

        // Validate QTY of items in the cart after removal
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="title"]').should('contain' , 'Your Cart')
        cy.get('.cart_item').should('have.length', 2)
        cy.contains('.cart_item', 'Sauce Labs Fleece Jacket').should('exist')
        cy.contains('.cart_item', 'Sauce Labs Onesie').should('exist')    
       
    });
});

