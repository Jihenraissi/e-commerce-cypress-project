/// <reference types="cypress" />
import ProductPage from '../../pages/productPage';
import CartPage from '../../pages/cartPage';

describe('Remove product from cart', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.addFirstProductToCart()
    })

    it('Should remove product from cart and verify', () => {
        new ProductPage().goToCart()

        new CartPage()
            .cartRowsShouldHaveLength(1)
            .deleteFirstItem()
            .cartRowsShouldHaveLength(0)
    })
})