/// <reference types="cypress" />

it('should refresh and get a new quote', () => {
    cy.visit('http://localhost:52330/index.html')

    cy.get('#load-quote').click().click()

})

