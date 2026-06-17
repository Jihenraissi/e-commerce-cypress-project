/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import ContactPage from '../../pages/contactPage';

describe('Contact Form', () => {

    beforeEach(() => {
        new ContactPage()
            .load()
            .modalShouldBeVisible()
            .modalShouldHaveClass('show')
    })

    // BUG DETECTED - No client side validation


    it('[BUG] Send message with all fields empty - should be blocked', () => {
        // Expected: no alert / blocked
        // Actual: demoblaze submits anyway - NO VALIDATION
        new ContactPage()
            .alertShouldHaveText('Thanks for the message!!')
            .submit()
    })

    it('[BUG] Send message with only email filled - should be blocked', () => {
        new ContactPage()
            .fillForm(faker.internet.email(), '', '')
            .submit()
            .modalShouldNotBeVisible()
    })

    it('[BUG] Send message with only name filled - should be blocked', () => {
        new ContactPage()
            .fillForm('', faker.person.fullName(), '')
            .submit()
            .modalShouldNotBeVisible()
    })

    it('[BUG] Send message with incorrect email format - should be blocked', () => {
        new ContactPage()
            .fillForm('invalid-email', faker.person.fullName(), faker.lorem.sentence())
            .submit()
            .modalShouldNotBeVisible()
    })

    // HAPPY PATH - Works correctly

    it('Should send message with all fields filled correctly', () => {
        new ContactPage()
            .alertShouldHaveText('Thanks for the message!!')
            .fillForm(faker.internet.email(), faker.person.fullName(), faker.lorem.sentence())
            .submit()
            .modalShouldNotBeVisible()
    })
})