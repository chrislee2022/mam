/// <reference types="Cypress" />

// import Lodge from "../../PageObjects/Lodge"
// import Filters from "../../PageObjects/Filters"

import Lodge from "../mammothPageObjects/Lodge"
import Filters from "../mammothPageObjects/Filters"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const filters=new Filters
const lodge=new Lodge

beforeEach(() => {
    cy.viewport('macbook-13')
    lodge.mvcLodgeListingEmpty()
    // lodge.uatWPLodgeListing()
    cy.wait(2500)   

    // // cy.get('.loading-spinner').should('be.visible')
    cy.get('.loading-spinner', {timeout: 60000}).should('not.be.visible')

    // if Alert is opened, then close it
    cy.get('body').then(($ele) => {
        if ($ele.find('.alerts.unread-others.opened').length > 0) {
            cy.get('.alerts-toggle').click()
        // } else {
        //     //Do Something
        }
    })   
        
})

describe('able to search date with no dates selected', () => {

    // Cypress._.times(5, () => {
 
    // it('check number of lodges available', () => {

    //     // cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })

    //     lodge.LodgesAvailable()
    //     .should('include.text', '9')
    //     .should('include.text', 'lodges available')              
     
         
    // })    

    it('search date 12/20 to 12/27 with 3 adults 1 kid', () => {

        // cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })

        // Open Check in/out filter
        filters.CheckInOut().click()

        // Click on '>' to go to month of Dec
        // filters.NextMonthArrow().eq(1).click()
        filters.NextMonthArrow().eq(1).click()
        filters.NextMonthArrow().eq(1).click()

        // select dec 20
        cy.get('button[data-day="1671519600000"]').click()

        // select 27
        cy.get('button[data-day="1672124400000"]').click()

        // Open 'Guests' filter 
        // filters.Widget().contains('Guests:').click()
        filters.Guests().click()
        
        // Add 1 more Adults
        filters.Plus().eq(0).click()
        
        //kids 
        filters.Plus().eq(1).click()

        // click on update
        filters.CheckAvailability().eq(2).click()

        // // cy.get('.loading-spinner').should('be.visible')
        cy.get('.loading-spinner', {timeout: 60000}).should('not.be.visible')               

        lodge.LodgesAvailable()
        .should('include.text', '5')
        .should('include.text', 'lodges available')        

        cy.wait(500)

        //Verify that "A to Z" filter worked by looking for "61 Jabberwocky"
        lodge.LodgeName().eq(0).should('include.text','Hillside Highland Townhomes')
        cy.get('.price').eq(0).should('include.text', '$2,850.57')

        lodge.LodgeName().eq(2).should('include.text','Juniper Springs Resort')
        cy.get('.price').eq(2).should('include.text', '$596.71')
        // cy.get('.css-g76vjx').eq(1).should('include.text', 'Juniper Springs Resort')
        // cy.get('.css-atvx2h').eq(1).should('include.text', '$573.06')

        lodge.LodgeName().eq(1).should('include.text','Mammoth Mountain Inn')
        cy.get('.price').eq(1).should('include.text', '$319.00')
        // cy.get('.css-g76vjx').eq(2).should('include.text', 'Mammoth Mountain Inn')
        // cy.get('.css-atvx2h').eq(2).should('include.text', '$319.00')

        lodge.LodgeName().eq(3).should('include.text','The Village Lodge')
        cy.get('.price').eq(3).should('include.text', '$579.77')
        // cy.get('.css-g76vjx').eq(3).should('include.text', 'The Village Lodge ')
        // cy.get('.css-atvx2h').eq(3).should('include.text', '$579.77')     
        
        lodge.LodgeName().eq(4).should('include.text','The Villas at Obsidian')
        cy.get('.price').eq(4).should('include.text', '$2,936.29')
        // cy.get('.css-g76vjx').eq(4).should('include.text', 'The Villas at Obsidian')
        // cy.get('.css-atvx2h').eq(4).should('include.text', '$2,936.29')           

    })     

    // it('search date 4/10 to 4/14 with 2 adults 0 kid, show all 9 with prices', () => {

    //     // cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })

    //     // cy.contains('Check in/out').eq(1).click()

    //     //open date picker 
    //     cy.get('.css-ubkssl > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()

    //     // get to december
    //     // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()

    //     // select april 10
    //     cy.get('.css-1qlnvfv').eq(13).click()
    //     cy.wait(100)

    //     // select 14
    //     cy.get('.css-1qlnvfv').eq(17).click()
    //     cy.wait(100)

    //     // click on update
    //     cy.contains('Update').click()

    //     // spinner
    //     cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
    //     // cy.wait(100)
    //     // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')

    //     // there should be 9 lodges available
    //     cy.get('.css-1hvkbgl', {timeout: 60000})
    //         .should('include.text', '9')
    //         .should('include.text', 'lodges available')      

    //     cy.get('.css-g76vjx').eq(0).should('include.text', 'Hillside Highland Townhomes')
    //     cy.get('.css-atvx2h').eq(0).should('include.text', '$1,679.20')

    //     cy.get('.css-g76vjx').eq(1).should('include.text', 'Juniper Springs Resort')
    //     cy.get('.css-atvx2h').eq(1).should('include.text', '$215.20')

    //     cy.get('.css-g76vjx').eq(2).should('include.text', 'Mammoth Mountain Inn')
    //     cy.get('.css-atvx2h').eq(2).should('include.text', '$167.20')

    //     cy.get('.css-g76vjx').eq(3).should('include.text', 'Tamarack Lodge')
    //     cy.get('.css-atvx2h').eq(3).should('include.text', '$95.20')     
        
    //     cy.get('.css-g76vjx').eq(4).should('include.text', 'The Heron at Obsidian Residences')
    //     cy.get('.css-atvx2h').eq(4).should('include.text', '$1,679.20')       

    //     cy.get('.css-g76vjx').eq(5).should('include.text', 'The Kestral at Obsidian Residences')
    //     cy.get('.css-atvx2h').eq(5).should('include.text', '$1,919.20')              

    //     cy.get('.css-g76vjx').eq(6).should('include.text', 'The Lodges at Snowcreek')
    //     cy.get('.css-atvx2h').eq(6).should('include.text', '$799.20')      
        
    //     cy.get('.css-g76vjx').eq(7).should('include.text', 'The Village Lodge')
    //     cy.get('.css-atvx2h').eq(7).should('include.text', '$239.20')           
        
    //     cy.get('.css-g76vjx').eq(8).should('include.text', 'The Villas at Obsidian')
    //     cy.get('.css-atvx2h').eq(8).should('include.text', '$1,759.20')           
    
    // })         

    // it('search then click on the lodge and see the multi unit details page', () => {

    //     //open date picker 
    //     cy.get('.css-ubkssl > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()

    //     // get to december
    //     // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
    //     cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()

    //     // select april 10
    //     cy.get('.css-1qlnvfv').eq(13).click()
    //     cy.wait(100)

    //     // select 14
    //     cy.get('.css-1qlnvfv').eq(17).click()
    //     cy.wait(100)

    //     // click on update
    //     cy.contains('Update').click()

    //     // spinner
    //     cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
    //     // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')

    //     // there should be 4 lodges available
    //     cy.get('.css-1hvkbgl')
    //     .should('include.text', '9')
    //     .should('include.text', 'lodges available')      

    //     cy.get('.css-g76vjx').eq(2).should('include.text', 'Mammoth Mountain Inn')
    //     cy.get('.css-atvx2h').eq(2).should('include.text', '$167.20')
    //         .click()   

    // })   

    // // })      // repeat 5

}) 
