/// <reference types="cypress" />
import LoginPage from "../../pages/loginPage"
describe('Logout', () => {

    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')

    beforeEach(() => {
        cy.intercept('POST', '**/login').as('login')
        new LoginPage()
            .load()
            .openLoginModal()
            .login(username, password)
        cy.wait('@login')
    })

    it('Should be able to login successfully', () => {
        new LoginPage().welcomeMessageShouldBeVisible(username)
    })

    it('Should be able to logout successfully', () => {
        new LoginPage()
            .logout()
            .loginButtonShouldBeVisible()
            .signupButtonShouldBeVisible()
    })
})