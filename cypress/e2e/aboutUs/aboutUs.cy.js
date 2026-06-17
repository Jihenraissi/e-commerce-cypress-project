/// <reference types="cypress" />
import AboutUsPage from "../../pages/aboutUsPage"

describe('About Us', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', () => false)
        new AboutUsPage().load()
    })

    it('Should open About Us modal and play video', () => {
        new AboutUsPage()
            .openModal()
            .modalShouldBeVisible()
            .modalShouldHaveClass('show')
            .videoShouldExist()
            .playVideo()
            .videoShouldBePlaying()
    })

    it('Should close About Us modal and verify video stops', () => {
    new AboutUsPage()
        .openModal()
        .modalShouldBeVisible()
        .modalShouldHaveClass('show')
        .closeModal()
        .modalShouldNotHaveClass('show')
        .videoShouldBePaused()
})
})