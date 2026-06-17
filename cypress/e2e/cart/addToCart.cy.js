/// <reference types="cypress" />
import ProductPage from '../../pages/productPage';
import CartPage from '../../pages/cartPage';

describe('Add to cart', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should add product to cart and verify', () => {
        cy.addFirstProductToCart().then((productName) => {
            new ProductPage().goToCart()

            new CartPage()
                .cartShouldContain(productName)
                .cartRowsShouldHaveLength(1)
        })
    })
})