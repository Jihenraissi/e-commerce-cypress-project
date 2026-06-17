class SignUpPage {
    // Elements
    get signupNavButton() {
        return cy.get('#signin2')
    }
    get usernameInput() {
        return cy.get('#sign-username')
    }
    get passwordInput() {
        return cy.get('#sign-password')
    }
    get submitButton() {
        return cy.contains('.btn-primary', 'Sign up')
    }

    // Methods
    load() {
        cy.visit('/');
        this.signupNavButton.click()
        return this;
    }
    fillForm(username, password) {
        if (username) this.usernameInput.type(username, { force: true })
        if (password) this.passwordInput.type(password, { force: true })
        return this;
    }
    submit() {
        this.submitButton.click()
        return this;
    }

    // Assertions
    alertShouldHaveText(expectedText) {
        cy.on('window:alert', (text) => {
            expect(text).to.eq(expectedText)
        })
        return this;
    }
}

export default SignUpPage