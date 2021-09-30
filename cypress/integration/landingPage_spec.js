describe('Main Page rendering', () => {
  describe('Should be able to render main page', () => {
    it('User should see header and input box', () => {
      cy.homePage().get('h1').contains('Weather Now').get('input').should('exist')
    })
    it('User should see hero image on page load', () => {
      cy.get('.hero').should('exist')
    })
    it('User should see no cards on page load', () => {
      cy.get('.city-card').should('have.length', 0)
    })
    it('User should be able to select a city and see the city card loaded', () => {
      cy.get('[type="text"]').type('detroit').should('have.value', 'detroit')
        .interceptFetch(201).get('[type="text"]').type('{enter}').clear()
        .get('.city-card').should('have.length', 1)
        .get('.card-header > h1').contains('SteveLandia')
    })
    it('New rendered card should contain: city, save button and icon', () => {
      cy
        .get('.card-header > h1').contains('SteveLandia')
        .get('.favorite-icon').should('exist')
        .get('.city-card > :nth-child(2)').contains('Hi:69 | Lo:-69')
        .get('.icon-img').should('exist')
        .get('.city-card > :nth-child(4)').contains('Heavy Intense Drizzle')
    })
    it('User should be able to favorite newly rendered card', () => {
      cy.get('.favorite-icon').click()
    })
    it('User can click on "Show Favorites" button to view only saved cities', () => {
     cy.get('.fav-btn').click()
    })
    it('URL should switch when clicking the "Show Favorites" button', () => {
      cy.url().should('eq', 'http://localhost:3000/saved')
    })
  })
})