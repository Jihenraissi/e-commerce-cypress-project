/// <reference types="cypress" />
import HomePage from "../../pages/homePage"

describe('Pagination', () => {

    beforeEach(() => {
        new HomePage().load()
        // Wait for initial products to load before testing pagination
        cy.get('#tbodyid .card-title').should('have.length.greaterThan', 0)
    })

    it('Should display different products when clicking Next button', () => {
        cy.get('#tbodyid .card-title').then(($titles) => {
            const firstPageProducts = [...$titles].map(el => el.innerText)

            cy.intercept('POST', '**/pagination').as('pagination')
            new HomePage().clickNext()
            cy.wait('@pagination')

            cy.get('#tbodyid .card-title').should(($newTitles) => {
                const secondPageProducts = [...$newTitles].map(el => el.innerText)
                expect(firstPageProducts).to.not.deep.equal(secondPageProducts)
            })
        })
    })

    it('Should display Previous button after clicking Next', () => {
        cy.intercept('POST', '**/pagination').as('pagination')
        new HomePage().clickNext()
        cy.wait('@pagination')

        new HomePage().prevButtonShouldBeVisible()
    })

    it('Should display products after clicking Next', () => {
        cy.intercept('POST', '**/pagination').as('pagination')
        new HomePage().clickNext()
        cy.wait('@pagination')

        new HomePage().productsShouldExist()
    })
})