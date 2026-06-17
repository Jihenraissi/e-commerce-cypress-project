class LoginPage {
    // Elements
    get loginButton() {
        return cy.get('#login2')
    }
    get usernameInput() {
        return cy.get('#loginusername')
    }
    get passwordInput() {
        return cy.get('#loginpassword')
    }
    get submitButton() {
        return cy.contains('.btn-primary', 'Log in')
    }
    get logoutButton() {
        return cy.get('#logout2')
    }
    get signupNavButton() {
        return cy.get('#signin2')
    }

    // Methods
    load() {
        cy.visit('/');
        return this;
    }
    openLoginModal() {
        this.loginButton.click()
        return this;
    }
    login(username, password) {
        this.usernameInput.type(username, { force: true })
        this.passwordInput.type(password, { force: true })
        this.submitButton.click()
        return this;
    }
    logout() {
        this.logoutButton.click({ force: true })
        return this;
    }

    // Assertions
    welcomeMessageShouldBeVisible(username) {
        cy.contains(`Welcome ${username}`).should('be.visible')
        return this;
    }
    alertShouldHaveText(expectedText) {
        cy.on('window:alert', (text) => {
            expect(text).to.eq(expectedText)
        })
        return this;
    }
    loginButtonShouldBeVisible() {
        this.loginButton.should('be.visible')
        return this;
    }
    signupButtonShouldBeVisible() {
        this.signupNavButton.should('be.visible')
        return this;
    }
}

export default LoginPage