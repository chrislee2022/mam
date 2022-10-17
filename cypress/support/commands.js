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



Cypress.Commands.add('login', (username, password) => {
    // cy.session([username, password], () => {
      cy.visit('https://alterra:466RGXuqBhnESDvV@account.uat.ikonpass.com/login')
      cy.get('#email').type(username)
      cy.get('#password').type(password)
      cy.get("[data-test='button']").click()
      // cy.wait(3000)
      cy.url().should('contain', '/en/myaccount')
    // })
  })