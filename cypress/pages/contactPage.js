class ContactPage {
    // Elements
    get navbarContactLink() {
        return cy.get('#navbarExample').contains('Contact')
    }
    get modal() {
        return cy.get('#exampleModal')
    }
    get emailInput() {
        return cy.get('#recipient-email')
    }
    get nameInput() {
        return cy.get('#recipient-name')
    }
    get messageInput() {
        return cy.get('#message-text')
    }
    get sendButton() {
        return cy.get('#exampleModal .btn-primary').contains('Send message')
    }

    // Methods
    load() {
        cy.on('uncaught:exception', () => false)
        cy.visit('/')
        this.navbarContactLink.click()
        return this;
    }
    fillForm(email, name, message) {
        if (email) this.emailInput.type(email, { force: true })
        if (name) this.nameInput.type(name, { force: true })
        if (message) this.messageInput.type(message, { force: true })
        return this;
    }
    submit() {
        this.sendButton.click()
        return this;
    }

    // Assertions
    modalShouldBeVisible() {
        this.modal.should('be.visible')
        return this;
    }
    modalShouldHaveClass(className) {
        this.modal.should('have.class', className)
        return this;
    }
    modalShouldNotBeVisible() {
        this.modal.should('not.be.visible')
        return this;
    }
    alertShouldHaveText(expectedText) {
        cy.on('window:alert', (msg) => {
            expect(msg).to.eql(expectedText)
        })
        return this;
    }
}

export default ContactPage