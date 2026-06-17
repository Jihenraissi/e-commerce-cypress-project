class HomePage {
    // Elements
    get productCards() {
        return cy.get('#tbodyid .card')
    }
    get productTitles() {
        return cy.get('#tbodyid .card-title')
    }
    get productList() {
        return cy.get('#tbodyid')
    }
    get nextButton() {
        return cy.get('#next2')
    }
    get prevButton() {
        return cy.get('#prev2')
    }

    // Methods
    load() {
        cy.visit('/');
        return this;
    }
    selectCategory(categoryName) {
        cy.contains(categoryName).click()
        return this;
    }
    clickNext() {
        this.nextButton.click()
        return this;
    }
    clickPrev() {
        this.prevButton.click()
        return this;
    }

    // Assertions
    productsShouldExist() {
        this.productCards.should('exist')
        return this;
    }
    productListShouldContain(text) {
        this.productList.should('contain', text)
        return this;
    }
    prevButtonShouldBeVisible() {
        this.prevButton.should('be.visible')
        return this;
    }
}

export default HomePage