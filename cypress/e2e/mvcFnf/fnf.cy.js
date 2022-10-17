/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

beforeEach(() => {

  cy.login('chris@1.test', 'Makeitagood1')

  // cy.setCookie('AmpAccessCode', '1796224315')
  // cy.setCookie('AmpAccessToken', 'eyJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJhcGkudWF0Lmlrb25wYXNzLmNvbSIsImlhdCI6MTY2MDI1MTcxNiwiZXhwIjoxNjYwMjU4OTE2LCJqdGkiOiI4NDQ5ZWEzNi1kOTcyLTQ2Y2YtYTM5Yi04ZDk3MWY3NGVhZjMiLCJzY29wZXMiOlsiZ3Vlc3Qud3JpdGUuYWNjb3VudCIsImd1ZXN0LnJlYWQuYWNjb3VudCIsImd1ZXN0LnJlYWQuY3JlZGl0X2NhcmQiLCJndWVzdC53cml0ZS5jcmVkaXRfY2FyZCIsImd1ZXN0LndyaXRlLmNyZWRpdF9jYXJkX3dlYnZpZXciLCJndWVzdC5yZWFkLmNyZWRpdF9jYXJkX3dlYnZpZXciLCJndWVzdC53cml0ZS5vcmRlcnMiLCJndWVzdC5yZWFkLm9yZGVycyIsImd1ZXN0LndyaXRlLmNoZWNrb3V0IiwiYXBpLndyaXRlLmFjY291bnQiLCJhcGkucmVhZC5hY2NvdW50IiwiYXBpLnJlYWQub3JkZXJzIiwiZ3Vlc3Qud3JpdGUucGFzc3dvcmQiXSwic3ViIjoiMDgxMzFmN2UyN2VjNDM4ZTg0ODlhMzY1MzgxMjU4MzcifQ.okgDFZ6OsBcPsmykGIrSMri_VTEsfyHkUCbL4WTL7YFbSQxILdlohhxiGDAexQPGsnqMxmfJDB54sqVIJEBJGERUBMOq4UcQeeVA0Iz0YcAVIralRgVc0P3XT204wi1czDmaBY34u2RpaxLPNHMXftM3fHE3ERVbT1MSQ1nuP0hgmFbAkNPQzAkkPyqk72uSeC3v9zVg7PLjJB63m9nMo5_pvzTU72VLXqO-j9mR3GMPBdZ7fcr1nGgI8F1BUBuh4MwgYUSHzwV5eYaMN9ld5UCRgDEr4u0lxl05mIpTpn_7OsJb6qXRjtC2Fjh7yRaspdEFwxRaUP_AaEgXV8WGNA')
  // cy.setCookie('sessionId', 'da1abfa1-a930-482e-9bb2-53f50781aa4e')

})


describe('test', () => {

  it("test", () => {

    cy.viewport('macbook-13')
    cy.origin('https://alterramtnco.dev', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    cy.visit('https://tremblant-sc10-dev.alterramtnco.dev/friends-and-family-discount-login')

  })

    cy.get('.cta').click()

    // cy.url().should('contain', 'https://tremblant-sc10-dev.alterramtnco.dev/friends-and-family-discount-redeem')

    cy.wait(3000)

    cy.get('.redeem-button').eq(0).should('be.visible')
    cy.get('.redeem-button').eq(2).should('be.visible')

    // })

  })


  it("test2", () => {

    cy.viewport('macbook-13')
    cy.origin('https://alterramtnco.dev', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    cy.visit('https://tremblant-sc10-dev.alterramtnco.dev/friends-and-family-discount-login')

  })


    cy.get('.cta').click()
  
    cy.wait(3000)

    // cy.get('.cta').click()

    // cy.url().should('contain', 'https://tremblant-sc10-dev.alterramtnco.dev/friends-and-family-discount-redeem')

    // cy.wait(3000)

    // if Alert is opened, then close it
    cy.get('body').then(($ele) => {
      if ($ele.find('.alerts.unread-others.opened').length > 0) {
          cy.get('.alerts-toggle').click()
      // } else {
      //     //Do Something
      }
    })  

    cy.get('.redeem-button').eq(0).should('be.visible')
      .click()

    })


  // })

})
