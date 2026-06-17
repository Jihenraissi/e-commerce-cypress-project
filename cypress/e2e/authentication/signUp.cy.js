/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import SignUpPage from '../../pages/signUpPage';

describe('Signup', () => {

    beforeEach(() => {
        new SignUpPage().load()
    })

    it('Should create a new account', () => {
        new SignUpPage()
            .fillForm(faker.internet.username(), faker.internet.password())
            .submit()
            .alertShouldHaveText('Sign up successful.')
    })

    it('[NEGATIVE] Should not allow signup with an existing username', () => {
        const existingUsername = Cypress.env('USERNAME')
        const password = Cypress.env('PASSWORD')

        new SignUpPage()
            .fillForm(existingUsername, password)
            .submit()
            .alertShouldHaveText('This user already exist.')
    })

    it('[NEGATIVE] Should not allow signup without username', () => {
        new SignUpPage()
            .fillForm('', faker.internet.password())
            .submit()
            .alertShouldHaveText('Please fill out Username and Password.')
    })

    it('[NEGATIVE] Should not allow signup without password', () => {
        new SignUpPage()
            .fillForm(faker.internet.username(), '')
            .submit()
            .alertShouldHaveText('Please fill out Username and Password.')
    })

    it('[NEGATIVE] Should not allow signup without username and password', () => {
        new SignUpPage()
            .submit()
            .alertShouldHaveText('Please fill out Username and Password.')
    })
})