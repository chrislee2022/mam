/// <reference types="Cypress" />

import Lodge from "../../mammothPageObjects/Lodge"
import Cart from "../../mammothPageObjects/Cart"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const lodge=new Lodge
const cart=new Cart

beforeEach(() => {
    
    cy.viewport('macbook-13')
    lodge.mvcMultiUnitMmiDated()

    // Wait for page to load
    cy.get('.availability-links', {timeout: 60000}).should('be.visible')

    // if Alert is opened, then close it
    cy.get('body').then(($ele) => {
        if ($ele.find('.alerts.unread-others.opened').length > 0) {
            cy.get('.alerts-toggle').click()
        // } else {
        //     //Do Something
        }
    })  

})

describe('Multi Unit (with bundle) Lodge Only to mini cart, should be displayed on cart pag', () => {

    // Cypress._.times(5, () => {

    it('C29732 Book Lodge Only', () => {

        // Click on 'Book Lodge Only'
        lodge.BookLodge().eq(0).click({force: true})
        // cy.wait(2000)

        // Go to Cart Page
        cart.GoToCart().click()
        cart.Items({timeout: 10000}).should('be.visible')

        // if Alert is opened, then close it
        cy.get('body').then(($ele) => {
            if ($ele.find('.alerts.unread-others.opened').length > 0) {
                cy.get('.alerts-toggle').click()
            // } else {
            //     //Do Something
            }
        })           

        // Verify  cart 
        cart.Items().should('include.text', 'Mammoth Mountain Inn')
            .and('include.text', 'Apr 10-14, 2023')
            .and('include.text', '2 Adults, 0 Children')
            .and('include.text', '2 Double Hotel Room - Mammoth Mountain Inn')
            .and('include.text', ' $836.00')

        cy.get('.order-summary').eq(3).should('include.text', 'Subtotal (1 item)')
            .and('include.text', '$836.00')
            .and('include.text', 'Transaction processing fees')
            .and('include.text', '$0.00')
            .and('include.text', 'Taxes & Fees')
            .and('include.text', '$231.04')
            .and('include.text', 'Estimated Total (USD)')
            .and('include.text', '$1,067.04')            
            
        })


    // C29733
    it('C29733 Click on Book Package', () => {
        
        // Click on 'Packages' 
        lodge.Packages().eq(0).click()

        // Click on 'Book This Package' 
        lodge.BookPackage().eq(2).click({force: true})
        //    cy.wait(1500)

        // Go to Cart Page
        cart.GoToCart().click()
        cart.Items({timeout: 10000}).should('be.visible')

        // if Alert is opened, then close it
        cy.get('body').then(($ele) => {
            if ($ele.find('.alerts.unread-others.opened').length > 0) {
                cy.get('.alerts-toggle').click()
            // } else {
            //     //Do Something
            }
        })           

        // Verify  cart 
        cart.Items().should('include.text', 'Mammoth Mountain Inn')
            .and('include.text', 'Apr 10-14, 2023')
            .and('include.text', '2 Adults, 0 Children')
            .and('include.text', '2 Double Hotel Room - Mammoth Mountain Inn')

        cy.get('.orig-price').should('include.text', ' $836.00')     
        cy.get('.price').should('include.text', '$752.40')     
        
        cy.get('.package-name').should('include.text', 'Package:') 
            .and('include.text', 'AAA/AARP Discount')

        cy.get('.order-summary').eq(3).should('include.text', 'Subtotal (1 item)')
            .and('include.text', '$752.40')
            .and('include.text', 'Transaction processing fees')
            .and('include.text', '$0.00')
            .and('include.text', 'Taxes & Fees')
            .and('include.text', '$219.33')
            .and('include.text', 'Estimated Total (USD)')
            .and('include.text', '$971.73')       
            .and('include.text', 'Due Now')          
            .and('include.text', '$242.93')       
       
        
    })

    // // C29734
    // it('C29734 Click on Customize Package', () => {

    //     //Click on 'Packages' 
    //     lodge.Packages().click()

    //     //Click on the first available 'Customize Package'
    //     lodge.CustomizePackage().eq(0).click()
    //         // cy.wait(1500)

    //     //Verify by URL
    //     cy.url().should('not.eq', baseuUrl)
    //     cy.url().should('include', 'https://reservations.tremblant.ca/ecomm/Package/PackageBuilder/5549517/en-US')

    // })

    // it('2 Bedroom Tab + open bundles okay', () => {

    //     // Verify by the name of the room
    //     lodge.RoomName().should('include.text', oneBedroom)

    //             // // click on 3 bedroom tab use this way
    //             // cy.get('.tabs').contains('3 Bedroom').click()

    //     // Click on '2 Bedroom' Tab (from inntopia-multiunit-details inntopia-filters inntopia-packages)
    //     lodge.TwoBedroomTab().click()

    //     // Verify by the name of the room
    //     lodge.RoomName().should('include.text', twoBedroom)

    //     // Click on 'Book Lodge Only'
    //     lodge.BookLodge().eq(0).click({force: true})
    //         // cy.wait(2500)

    //     //Bundles pop up should be visible
    //     bundles.BundlePopUp().should('be.visible')

    //     //Click on 'Cancel and exit' from the bundles
    //     bundles.Cancel().click()

    //     //Click on 'Packages' 
    //     lodge.Packages().click()
    //     // cy.wait(1000)

    //     //Click on 'Book This Package' 
    //     lodge.BookPackage().eq(1).click()
    //     // cy.wait(1500)

    //     //Click on 'Cancel and exit' from the bundles
    //     bundles.Cancel().click()
    //     // cy.wait(3000)

    //     //Verify mini cart reads Emty Cart
    //     cart.EmptyCart().should('include.text', 'Empty Cart')

    //     //Verify verbiage on the mini cart when it's empty
    //     cart.EmptyCartMsg().should('include.text', "There's nothing in your cart")

    // })

    // it('C29742 cancel bundles pop up on Book This Package', () => {

    //     // Click on 'Packages' 
    //     lodge.Packages().click()

    //     // Click on 'Book This Package' 
    //     lodge.BookPackage().eq(1).click()
    //     //    cy.wait(1500)

    //     //Click on 'Cancel and exit' from the bundles
    //     bundles.Cancel().click()
    //     // cy.wait(3000)

    //     //Verify mini cart reads Emty Cart
    //     cart.EmptyCart().should('include.text', 'Empty Cart')

    //     //Verify verbiage on the mini cart when it's empty
    //     cart.EmptyCartMsg().should('include.text', "There's nothing in your cart")           

    // })       

    // it('C29748 shows correct mini cart icon number', () => {

    //     // Click on 'Book Lodge Only'
    //     lodge.BookLodge().eq(0).click()

    //     // Bundles pop up should be displayed
    //     cy.get('.inntopia-bundles' , {timeout: 60000}).should('be.visible')

    //     // Click on 'Resort Lunch Voucher'
    //     bundles.BundleOption().contains('Resort Lunch Voucher').click()

    //     // Click on 'Next Step'
    //     bundles.NextStep().eq(0).click()

    //     //STEP2 added July 5

    //     // click on No Thanks button
    //     bundles.NoThanks().eq(1).click()

    //     // Click on 'Next Step'
    //     bundles.NextStep().eq(1).click()          

    //     // Add to Cart from Bundles
    //     bundles.AddToCart().click()
    //         // cy.wait(3500)
        
    //     // cy.get('.mini-cart-toggle-icon-number')
    //     cart.MiniCartNumber()
    //         .should('have.text', '2')      
            
    //     // click on Trash
    //     cart.Trash().click()   
    //         cy.wait(1500)         

    //     // should be 0
    //     cart.MiniCartNumber()
    //     .should('have.text', '0')  
        
    // })

    // }) //for repeat5

})
