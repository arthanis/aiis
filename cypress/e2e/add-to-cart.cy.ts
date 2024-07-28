// https://on.cypress.io/api

describe('AddToCart Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Products')

    cy.get('.nav-item-products').click({ force: true })

    // eslint-disable-next-line
    cy.wait(5000)
    cy.get('.btn-add-to-cart').click({ multiple: true })
  })
})
