/// <reference types="cypress" />
import LoginPage from "../../pages/loginPage"

describe('Login', () => {

    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')

    beforeEach(() => {
        new LoginPage().load().openLoginModal()
    })

    it('Should login with valid credentials', () => {
        new LoginPage()
            .login(username, password)
            .welcomeMessageShouldBeVisible(username)
    })

    it('[NEGATIVE] Should not login with invalid username', () => {
        new LoginPage()
            .login('invalidUser', password)
            .alertShouldHaveText('User does not exist.')
    })

    it('[NEGATIVE] Should not login with invalid password', () => {
        new LoginPage()
            .login(username, 'WrongPassword')
            .alertShouldHaveText('Wrong password.')
    })

    it('[NEGATIVE] Should not login with invalid username and password', () => {
        new LoginPage()
            .login('invalidUser', 'WrongPassword')
            .alertShouldHaveText('Wrong password.')
    })
})