describe('Main Page rendering', () => {
  describe('Should be able to render main page', () => {
    it('should contain a header', () => {
      cy.homePage().get('h1').contains('Weather Now').get('input').should('exist')
    })
    it('should render card displaying weather details', () => {
      cy.get('[type="text"]').type('detroit').should('have.value', 'detroit')
        .interceptFetch().get('[type="text"]').type('{enter}').clear()
        .get('.city-container').should('have.length', 1)
        .get('.card-header > h1').contains('SteveLandia')
    })
    // it('rendered card unfavorited', () => {
    //   cy.get('*[class^="isFavorited"]').click()
    // })
    // it('', () => {})
  })
})