/// <reference types="Cypress" />

import Lodge from "../../mammothPageObjects/Lodge"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const lodge=new Lodge

beforeEach(() => {

    cy.viewport('macbook-13')
    lodge.MammMultiUnitMmiDated()
    // lodge.uatWPLodgeListing()
    // cy.wait(2500)   

    // spinning wheel
    // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
    // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')
    //     cy.wait(1000)
    cy.get('.css-13o7eu2', {timeout: 60000}).should('be.visible')

    // //text (hardcoded)
    // cy.get('.css-sy1nt6').contains('Loading...', {timeout: 60000}).should('be.visible')

    // close alerts
    cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })    

    // if Alert (cookie consent) is opened, then close it
    cy.get('body').then(($ele) => {
        if ($ele.find('.cc-window').length > 0) {
            cy.get('.cc-dismiss').click()
        // } else {
        //     //Do Something
        }
    })    
        
})

describe('Multi Unit (with bundle) Lodge Only to mini cart, should be displayed on cart pag', () => {

    // Cypress._.times(5, () => {

    it('C29732 Book Lodge Only', () => {

        // click on the first lodge only 
        cy.get('.css-pg2o0o').eq(0).click()

        // mini cart count should be 1 
        cy.get('.css-raibn').should('include.text', '1')

        // click on the basket
        cy.get('[alt="Basket"]').click()
    
        // // spinner (maybe) on the cart page 
        // cy.get('.css-1enmcrj', {timeout: 60000}).should('be.visible')

        // on mvc, this was named 'title'.  this is the name of the lodge 
        cy.get('.css-crpffl').should('include.text', 'Mammoth Mountain Inn')

        // on mvc, this was named 'dates'.  
        cy.get('.css-f2lfqi').should('include.text', 'Apr 10-14, 2023')
            .and('include.text', '2 Adults, 0 Children')
        
        // this should be the 'room-name'(back on multi unit details page), or 'description' from the cart page
        cy.get('.css-1a99zuj').should('include.text', '2 Double Hotel Room - Mammoth Mountain Inn')

        // this is the price
        cy.get('.css-18uni6r').should('include.text', '$836.00')

        // from Order Summary, check 'Subtotal'
        cy.get('.css-3miime').eq(0).should('include.text', 'Subtotal(1 item)')
            .and('include.text', '$836.00')

        // from Order Summary, check 'Transaction processing fees'
        cy.get('.css-3miime').eq(1).should('include.text', 'Transaction processing fees')
            .and('include.text', '$0.00')            

        // from Order Summary, check 'Taxes & Fees'
        cy.get('.css-3miime').eq(2).should('include.text', 'Taxes & Fees')
            .and('include.text', '$231.04')         
            
        // from Order Summary, check 'Estimated Total (USD)'
        cy.get('.css-3miime').eq(3).should('include.text', 'Estimated Total (USD)')
            .and('include.text', '$1,067.04')         

        // check Due Now and the ammount
        cy.get('.css-1aw6rkw').should('include.text', 'Due Now')
        .and('include.text', '$266.76')                
            

        // click on 'check out' button to inntopia oob
        cy.get('.css-10uqidd').click()
        cy.url().should('eq', 'https://reservations.tremblant.ca/ecomm/Checkout/Customer/17793040')

        // verify the price om the inntopia page is the same as the estimated total from the cart page
        cy.get('.text-right').eq(2).should('include.text', '$1,067.04')
          
    })

    it('C29732 Book This Package', () => {

        // click on 'packages' button
        cy.get('.css-1rq4esi').eq(0).click()

        // click on the first book this package  
        cy.get('.css-pg2o0o').eq(2).click()

        // mini cart count should be 1 
        cy.get('.css-raibn').should('include.text', '1')

        // click on the basket
        cy.get('[alt="Basket"]').click()
    
        // // spinner (maybe) on the cart page 
        // cy.get('.css-1enmcrj', {timeout: 60000}).should('be.visible')

        // on mvc, this was named 'title'.  this is the name of the lodge 
        cy.get('.css-crpffl').should('include.text', 'Mammoth Mountain Inn')

        // on mvc, this was named 'dates'.  
        cy.get('.css-f2lfqi').should('include.text', 'Apr 10-14, 2023')
            .and('include.text', '2 Adults, 0 Children')
        
        // this should be the 'room-name'(back on multi unit details page), or 'description' from the cart page
        cy.get('.css-1a99zuj').should('include.text', '2 Double Hotel Room - Mammoth Mountain Inn')

        // find the 'package' name
        cy.get('.css-3idqtr').should('include.text', 'Package:AAA/AARP Discount')

        // this is the original price
        cy.get('.css-yua7bw').should('include.text', '$836.00')

        // this is the original price
        cy.get('.css-18uni6r').should('include.text', '$752.40')        

        // from Order Summary, check 'Subtotal'
        cy.get('.css-3miime').eq(0).should('include.text', 'Subtotal(1 item)')
            .and('include.text', '$752.40')

        // from Order Summary, check 'Transaction processing fees'
        cy.get('.css-3miime').eq(1).should('include.text', 'Transaction processing fees')
            .and('include.text', '$0.00')            

        // from Order Summary, check 'Taxes & Fees'
        cy.get('.css-3miime').eq(2).should('include.text', 'Taxes & Fees')
            .and('include.text', '$219.33')         
            
        // from Order Summary, check 'Estimated Total (USD)'
        cy.get('.css-3miime').eq(3).should('include.text', 'Estimated Total (USD)')
            .and('include.text', '$971.73')         

        // check Due Now and the ammount
        cy.get('.css-1aw6rkw').should('include.text', 'Due Now')
        .and('include.text', '$242.93')                
            
        // click on 'check out' button to inntopia oob
        cy.get('.css-10uqidd').click()
        cy.url().should('eq', 'https://reservations.tremblant.ca/ecomm/Checkout/Customer/17793040')

        // verify the price om the inntopia page is the same as the estimated total from the cart page
        cy.get('.text-right').eq(3).should('include.text', '$971.73')
          
    })    


    // }) //for repeat5

})
