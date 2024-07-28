// https://on.cypress.io/api

describe('Products Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Products')

    cy.get('.nav-item-products').click({ force: true })
  })
})
