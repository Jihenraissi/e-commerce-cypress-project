class CartPage {
    // Elements
    get cartRows() {
        return cy.get('#tbodyid tr')
    }
    get cartBody() {
        return cy.get('#tbodyid')
    }
    get placeOrderButton() {
        return cy.contains('.btn-success', 'Place Order')
    }
    get deleteLink() {
        return cy.contains('Delete')
    }

    // Order form elements
    get nameInput() { return cy.get('#name') }
    get countryInput() { return cy.get('#country') }
    get cityInput() { return cy.get('#city') }
    get cardInput() { return cy.get('#card') }
    get monthInput() { return cy.get('#month') }
    get yearInput() { return cy.get('#year') }
    get purchaseButton() { return cy.get('#orderModal .btn-primary').contains('Purchase') }
    get confirmationModal() { return cy.get('.sweet-alert') }
    get confirmationTitle() { return cy.get('.sweet-alert h2') }
    get confirmButton() { return cy.get('.confirm') }

    // Methods
    placeOrder() {
        this.placeOrderButton.click()
        return this;
    }
    fillOrderForm(name, country, city, card, month, year) {
        this.nameInput.type(name, { force: true })
        this.countryInput.type(country, { force: true })
        this.cityInput.type(city, { force: true })
        this.cardInput.type(card, { force: true })
        this.monthInput.type(month, { force: true })
        this.yearInput.type(year, { force: true })
        return this;
    }
    purchase() {
    cy.intercept('POST', '**/deletecart').as('postorder')
    this.purchaseButton.click()
    cy.wait('@postorder')
    return this;
    }
    closeConfirmation() {
        this.confirmButton.click()
        return this;
    }
    deleteFirstItem() {
        cy.intercept('POST', '**/deleteitem').as('deleteitem')
        this.deleteLink.click()
        cy.wait('@deleteitem')
        return this;
    }

    // Assertions
    cartShouldContain(text) {
        this.cartBody.should('contain', text)
        return this;
    }
    cartRowsShouldHaveLength(length) {
        if (length === 0) {
            this.cartRows.should('have.length', 0)
        } else {
            this.cartRows.should('have.length.greaterThan', 0)
        }
        return this;
    }
    confirmationShouldBeVisible() {
        this.confirmationModal.should('be.visible')
        return this;
    }
    confirmationTitleShouldContain(text) {
        this.confirmationTitle.should('contain', text)
        return this;
    }
}

export default CartPage