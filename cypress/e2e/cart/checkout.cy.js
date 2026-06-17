/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import ProductPage from '../../pages/productPage';
import CartPage from '../../pages/cartPage';

describe('Checkout', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.addFirstProductToCart()
    })

    it('Should place an order with valid data', () => {
        new ProductPage().goToCart()

        new CartPage()
            .cartRowsShouldHaveLength(1)
            .placeOrder()
            .fillOrderForm(
                faker.person.fullName(),
                faker.location.country(),
                faker.location.city(),
                faker.finance.creditCardNumber(),
                faker.date.month(),
                faker.date.future().getFullYear().toString()
            )
            .purchase()
            .confirmationShouldBeVisible()
            .confirmationTitleShouldContain('Thank you for your purchase!')
            .closeConfirmation()
    })
})