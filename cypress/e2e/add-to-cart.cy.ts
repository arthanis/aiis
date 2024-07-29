// https://on.cypress.io/api

/* eslint-disable */
describe('AddToCart Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Products')

    cy.get('.nav-item-products').click({ force: true })

    cy.wait(5000)
    cy.get('.btn-add-to-cart').click({ multiple: true })
    cy.wait(250)
    cy.get('.cart-qty')
  })
})
