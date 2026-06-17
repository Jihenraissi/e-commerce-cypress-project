/// <reference types="cypress" />
import HomePage from "../../pages/homePage"

describe('Categories filter', () => {

    beforeEach(() => {
        new HomePage().load()
    })

    it('Should display phones when clicking Phones category', () => {
        new HomePage()
            .selectCategory('Phones')
            .productsShouldExist()
            .productListShouldContain('phone')
    })

    it('Should display laptops when clicking Laptops category', () => {
        new HomePage()
            .selectCategory('Laptops')
            .productsShouldExist()
            .productListShouldContain('Sony')
    })

    it('Should display monitors when clicking Monitors category', () => {
        new HomePage()
            .selectCategory('Monitors')
            .productsShouldExist()
            .productListShouldContain('monitor')
    })
})