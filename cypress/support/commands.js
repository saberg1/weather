// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import detroit from '../fixtures/weatherData.json'

const key = 'adb5990def9e15662c0b51eae2be289d'
const city = 'detroit'

Cypress.Commands.add('homePage', () => {
  cy.visit('http://localhost:3000/');
});

Cypress.Commands.add('interceptFetch', (code) => {
  cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {
    statusCode: code,
    body: detroit
  });
});