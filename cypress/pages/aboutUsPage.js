class AboutUsPage {
    // Elements
    get navbarAboutLink() {
        return cy.get('#navbarExample').contains('About us')
    }
    get modal() {
        return cy.get('#videoModal')
    }
    get video() {
        return cy.get('#example-video_html5_api')
    }
    get playButton() {
        return cy.get('.vjs-big-play-button')
    }
    get closeButton() {
        return cy.get('#videoModal .close')
    }

    // Methods
    load() {
        cy.visit('/');
        return this;
    }
    openModal() {
        this.navbarAboutLink.click()
        return this;
    }
    playVideo() {
        this.playButton.click({ force: true })
        return this;
    }
    closeModal() {
    cy.wait(300) 
    this.closeButton.click({ force: true })
    return this;
}

    // Assertions
    modalShouldBeVisible() {
        this.modal.should('be.visible')
        return this;
    }
    modalShouldHaveClass(className) {
        this.modal.should('have.class', className)
        return this;
    }
    modalShouldNotBeVisible() {
        this.modal.should('not.be.visible')
        return this;
    }
    videoShouldExist() {
        this.video.should('exist')
        return this;
    }
    videoShouldBePlaying() {
        this.video.should((video) => {
            expect(video[0].paused).to.be.false
        })
        return this;
    }
    videoShouldBePaused() {
        this.video.should((video) => {
            expect(video[0].paused).to.be.true
        })
        return this;
    }
    modalShouldNotHaveClass(className) {
    this.modal.should('not.have.class', className)
    return this;
}
}

export default AboutUsPage