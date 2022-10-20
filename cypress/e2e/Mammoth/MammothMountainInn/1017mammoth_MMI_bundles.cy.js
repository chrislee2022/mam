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
    lodge.MammActivityResults()
    // lodge.uatWPLodgeListing()
    cy.wait(500)   

    // // spinning wheel
    // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
    // // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')
    // //     cy.wait(1000)
    // cy.get('.css-13o7eu2', {timeout: 60000}).should('be.visible')

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

describe('bundles on the activity results page', () => {

    // Cypress._.times(5, () => {

    // it('cancel on bundles, should not be in mini cart', () => {

    //     // click on the third add to cart 
    //     cy.get('.css-pg2o0o').eq(2).click()

    //     // bundles pop up should be visible
    //     cy.get('.css-1qmpe37', {timeout: 60000}).should('be.visible')

    //     // click on 'cancel'
    //     cy.get('.css-d1yoax').eq(0).click()
    //         cy.wait(2500)

    //     // mini cart count should be 0
    //     cy.get('.css-10cb3ki').should('include.text', '0')
          
    // })

    it('happy path on bundles', () => {

        // click on the third add to cart 
        cy.get('.css-pg2o0o').eq(0).click()

        // bundles pop up should be visible
        cy.get('.css-1qmpe37', {timeout: 60000}).should('be.visible')

        // select bundles option 
        cy.get('.css-1fqoy0a').contains('Additional Damage Insurance').click()
          
        // review add-ons should include the first option
        cy.get('.css-1ux1z66').should('include.text', 'Additional Damage Insurance')
            .and('include.text', '$15.00')

        // click on 'next step' button
        cy.get('.css-1hw9j7s').eq(0).click()

        // select bundles option 
        cy.get('.css-1fqoy0a').contains('Adult (23–64) Scenic Gondola Ride').click()        

        // review add-ons should include the first option
        cy.get('.css-1ux1z66').should('include.text', 'Additional Damage Insurance')
            .and('include.text', '$15.00') 
        cy.get('.css-1ux1z66').should('include.text', 'Adult (23–64) Scenic Gondola Ride')
            .and('include.text', '$25.00')

        // select bundles option 
        cy.get('.css-1fqoy0a').contains('Senior (65+) Scenic Gondola Ride').click()   

        // review add-ons should include the first option
        cy.get('.css-1ux1z66').should('include.text', 'Additional Damage Insurance')
            .and('include.text', '$15.00') 
        cy.get('.css-1ux1z66').should('include.text', 'Adult (23–64) Scenic Gondola Ride')
            .and('include.text', '$25.00')
        cy.get('.css-1ux1z66').should('include.text', 'Senior (65+) Scenic Gondola Ride')
            .and('include.text', '$25.00')            

        // click on 'next step' button
        cy.get('.css-1hw9j7s').eq(1).click()

        // click on 'add to cart 'from the bundles
        cy.get('.css-1y1hx8v').eq(0).click()

        // mini cart count should be 4
        cy.get('.css-raibn').should('include.text', '4')

        // click on the basket
        cy.get('[alt="Basket"]').click() 
        
        cy.get('.css-1kqe7ts').should('include.text', 'Snowmobiling')
            .and('include.text', 'Double 90-Minute Guided Adventure Tour - 8:15AM')
            .and('include.text', 'Mar 20, 2023')
            .and('include.text', 'Additional Damage Insurance') 
            .and('include.text', '$15.00') 
            .and('include.text', 'Adult (23–64) Scenic Gondola Ride') 
            .and('include.text', '$25.00') 
            .and('include.text', 'Senior (65+) Scenic Gondola Ride') 
            .and('include.text', '$25.00') 
            .and('include.text', 'Cart Bundles Add On Subtotal Text')
            .and('include.text', '$65.00') 
            .and('include.text', 'Cart Bundles Total Text')
            .and('include.text', '254.00')        
            .and('include.text', '$189.00')     

        // from Order Summary, check 'Subtotal'
        cy.get('.css-3miime').eq(0).should('include.text', 'Subtotal(4 items)')
            .and('include.text', '$254.00')

        // from Order Summary, check 'Transaction processing fees'
        cy.get('.css-3miime').eq(1).should('include.text', 'Transaction processing fees')
            .and('include.text', '$0.00')            

        // from Order Summary, check 'Taxes & Fees'
        cy.get('.css-3miime').eq(2).should('include.text', 'Taxes & Fees')
            .and('include.text', '$3.84')         
            
        // from Order Summary, check 'Estimated Total (USD)'
        cy.get('.css-3miime').eq(3).should('include.text', 'Estimated Total (USD)')
            .and('include.text', '$257.84')         

        // check Due Now and the ammount
        cy.get('.css-1aw6rkw').should('include.text', 'Due Now')
        .and('include.text', '$257.84')                     
    })

    // }) //for repeat5

})
