class ProductPage {
    // Elements
    get productName() {
        return cy.get('.name')
    }
    get addToCartButton() {
        return cy.contains('Add to cart')
    }
    get cartNavLink() {
        return cy.get('#cartur')
    }

    // Methods
    addToCart() {
        cy.intercept('POST', '**/addtocart').as('addtocart')
        this.addToCartButton.click()
        cy.wait('@addtocart')
        return this;
    }
    goToCart() {
        this.cartNavLink.click()
        return this;
    }

    // Assertions
    productNameShouldBeVisible() {
        this.productName.should('be.visible')
        return this;
    }
    alertShouldHaveText(expectedText) {
        cy.on('window:alert', (msg) => {
            expect(msg).to.eql(expectedText)
        })
        return this;
    }
}

export default ProductPage