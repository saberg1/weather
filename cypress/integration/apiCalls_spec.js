describe('fetch call errors', () => {
  it('User should see error message if server responds 400 status code', () => {
    cy
      .badFetch400()
      .get('.error').contains('Sorry there is a problem with the servers. Please Try again later')
  })
  it('User should see error message if server responds 500 status code', () => {
    cy
      .badFetch500()
      .get('.error').contains('Sorry there is a problem with the servers. Please Try again later')
  })
})