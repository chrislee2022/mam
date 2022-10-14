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
    lodge.MMLodgeListingEmpty()
    // lodge.uatWPLodgeListing()
    // cy.wait(2500)   

    // // // cy.get('.loading-spinner').should('be.visible')
    // cy.get('.loading-spinner', {timeout: 60000}).should('not.be.visible')

    // // if Alert is opened, then close it
    // cy.get('body').then(($ele) => {
    //     if ($ele.find('.alerts.unread-others.opened').length > 0) {
    //         cy.get('.alerts-toggle').click()
    //     // } else {
    //     //     //Do Something
    //     }
    // })     


    // close alerts
    cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })    
        
})

describe('able to search date with no dates selected', () => {

    // Cypress._.times(5, () => {
 
    it('check number of lodges available', () => {

        // cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })

        cy.get('.css-iw5yu9')
        .should('include.text', '9')
        .should('include.text', 'lodges available')          
     
         
    })    

    // not the best, the prices already changed in a day....
    it('search date 12/20 to 12/27 with 3 adults 1 kid', () => {

        //open date picker 
        // cy.get('.css-ubkssl > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
        cy.get('.css-xyzkeb').contains('Check in/out').click()

        // get to december
        // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()

        // test the left arrow
        cy.get('[data-testid="ArrowLeftIcon"]').eq(0).click()
        cy.wait(2000)

        // select dec 20
        cy.get('.css-1qlnvfv').eq(21).click()
        cy.wait(100)

        // select 27
        cy.get('.css-1qlnvfv').eq(28).click()
        cy.wait(100)

        // open guests
        cy.get('.css-17a9oa3').contains('Guests').click()
        // cy.contains('Guests').click()

        // adults
        cy.get('[data-testid="AddIcon"').eq(0).dblclick()
        cy.get('[data-testid="RemoveIcon"').eq(0).click()
        
        //kids 
        cy.get('[data-testid="AddIcon"').eq(1).dblclick()
        cy.get('[data-testid="RemoveIcon"').eq(1).click()

        // click on update
        cy.get('.css-ftwkje').contains('Update').click()
        // cy.contains('Update').click()

        // spinning wheel
        // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
        // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')
        //     cy.wait(1000)
        cy.get('.css-13o7eu2', {timeout: 60000}).should('be.visible')

        //text (hardcoded)
        cy.get('.css-sy1nt6').contains('Loading...', {timeout: 60000}).should('be.visible')

        // there should be 4 lodges available
        cy.get('.css-iw5yu9')
        .should('include.text', '5')
        .should('include.text', 'lodges available')      

        cy.get('.css-6ea11i').eq(0).should('include.text', 'Hillside Highland Townhomes')
        cy.get('.css-6ea11i').eq(0).should('include.text', '$2,850.57')

        // // this has changed frequently
        // cy.get('.css-6ea11i').eq(1).should('include.text', 'Juniper Springs Resort')
        // cy.get('.css-6ea11i').eq(1).should('include.text', '$596.71')

        // cy.get('.css-6ea11i').eq(2).should('include.text', 'Mammoth Mountain Inn')
        // cy.get('.css-6ea11i').eq(2).should('include.text', '$326.14')

        // cy.get('.css-6ea11i').eq(3).should('include.text', 'The Village Lodge')
        // cy.get('.css-6ea11i').eq(3).should('include.text', '$585.63')     
        
        cy.get('.css-6ea11i').eq(4).should('include.text', 'The Villas at Obsidian')
        cy.get('.css-6ea11i').eq(4).should('include.text', '$2,936.29')           

    })     

    it('search date 4/10 to 4/14 with 2 adults 0 kid, show all 9 with prices', () => {

    //     //open date picker 
    //     // cy.get('.css-ubkssl > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
        cy.get('.css-xyzkeb').contains('Check in/out').click()


        // get to december
        // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()

        // select april 10
        cy.get('.css-1qlnvfv').eq(13).click()
        cy.wait(100)

        // select 14
        cy.get('.css-1qlnvfv').eq(17).click()
        cy.wait(100)

        // click on update
        cy.get('.css-ftwkje').contains('Update').click()
        // cy.contains('Update').click()

        // spinning wheel
        // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
        // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')
        //     cy.wait(1000)
        cy.get('.css-13o7eu2', {timeout: 60000}).should('be.visible')

        //text (hardcoded)
        cy.get('.css-sy1nt6').contains('Loading...', {timeout: 60000}).should('be.visible')

        // there should be 9 lodges available
        cy.get('.css-iw5yu9', {timeout: 60000})
            .should('include.text', '9')
            .should('include.text', 'lodges available')      

        cy.get('.css-6ea11i').eq(0).should('include.text', 'Hillside Highland Townhomes')
        cy.get('.css-6ea11i').eq(0).should('include.text', '$1,679.20')

        // // this has changed frequently 
        // cy.get('.css-6ea11i').eq(1).should('include.text', 'Juniper Springs Resort')
        // cy.get('.css-6ea11i').eq(1).should('include.text', '$229.20')

        cy.get('.css-6ea11i').eq(2).should('include.text', 'Mammoth Mountain Inn')
        cy.get('.css-6ea11i').eq(2).should('include.text', '$167.20')

        cy.get('.css-6ea11i').eq(3).should('include.text', 'Tamarack Lodge')
        cy.get('.css-6ea11i').eq(3).should('include.text', '$95.20')     
        
        cy.get('.css-6ea11i').eq(4).should('include.text', 'The Heron at Obsidian Residences')
        cy.get('.css-6ea11i').eq(4).should('include.text', '$1,679.20')       

        cy.get('.css-6ea11i').eq(5).should('include.text', 'The Kestral at Obsidian Residences')
        cy.get('.css-6ea11i').eq(5).should('include.text', '$1,919.20')              

        cy.get('.css-6ea11i').eq(6).should('include.text', 'The Lodges at Snowcreek')
        cy.get('.css-6ea11i').eq(6).should('include.text', '$799.20')      
        
        // cy.get('.css-6ea11i').eq(7).should('include.text', 'The Village Lodge')
        // cy.get('.css-6ea11i').eq(7).should('include.text', '$239.20')           
        
        cy.get('.css-6ea11i').eq(8).should('include.text', 'The Villas at Obsidian')
        cy.get('.css-6ea11i').eq(8).should('include.text', '$1,759.20')           
    
    })         

    it('search then click on the lodge and see the multi unit details page', () => {

    // //     //open date picker 
    // //     // cy.get('.css-ubkssl > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
        cy.get('.css-xyzkeb').contains('Check in/out').click()

        // get to december
        // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()
        cy.get('[data-testid="ArrowRightIcon"]').eq(1).click()

        // select april 10
        cy.get('.css-1qlnvfv').eq(13).click()
        cy.wait(100)

        // select 14
        cy.get('.css-1qlnvfv').eq(17).click()
        cy.wait(100)

        // click on update
        cy.get('.css-ftwkje').contains('Update').click()
        // cy.contains('Update').click()

        // spinning wheel
        // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('be.visible')
        // // cy.get('.MuiCircularProgress-svg', {timeout: 60000}).should('not.be.visible')
        //     cy.wait(1000)
        cy.get('.css-13o7eu2', {timeout: 60000}).should('be.visible')

        //text (hardcoded)
        cy.get('.css-sy1nt6').contains('Loading...', {timeout: 60000}).should('be.visible')


        // there should be 4 lodges available
        cy.get('.css-iw5yu9')
        .should('include.text', '9')
        .should('include.text', 'lodges available')      

        cy.get('.css-6ea11i').eq(2).should('include.text', 'Mammoth Mountain Inn')
        cy.get('.css-6ea11i').eq(2).should('include.text', '$167.20')
            .click()   

        cy.url().should('eq', 'https://develop-mammoth-alterra.vercel.app/test/lodging/mammoth-mountain-inn?ArrivalDate=2023-04-10&DepartureDate=2023-04-14&Adult=2&Child=0')

        //details page not yet styled

    })   

    // // })      // repeat 5

}) 
