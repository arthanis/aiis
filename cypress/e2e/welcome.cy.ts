// https://on.cypress.io/api

describe('HomeView Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Welcome to Aldi online.')
  })
})
