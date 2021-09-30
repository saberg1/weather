describe('fetch call errors', () => {
  it('User should see error message if server responds 400 status code', () => {
    cy
      .homePage().get('[type="text"]').type('detroit').should('have.value', 'detroit')
      .interceptFetch(400).get('[type="text"]').type('{enter}').clear()
      .get('.error').contains('Sorry there is a problem with the servers. Please Try again later')
  })
  it('User should see error message if server responds 500 status code', () => {
    cy
      .homePage().get('[type="text"]').type('detroit').should('have.value', 'detroit')
      .interceptFetch(500).get('[type="text"]').type('{enter}').clear()
      .get('.error').contains('Sorry there is a problem with the servers. Please Try again later')
  })
})