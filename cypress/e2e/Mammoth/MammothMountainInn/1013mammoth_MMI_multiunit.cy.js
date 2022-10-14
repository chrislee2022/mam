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

    //text (hardcoded)
    cy.get('.css-sy1nt6').contains('Loading...', {timeout: 60000}).should('be.visible')

    // close alerts
    cy.get('.fa-xmark.css-zm3qx2').click({ multiple: true })    
        
})

describe('Multi Unit (with bundle) Lodge Only to mini cart, should be displayed on cart pag', () => {

    // Cypress._.times(5, () => {

    it('C29732 Book Lodge Only', () => {

        // click on the first lodge only 
        cy.get('.css-we5dge').eq(0).click()

        // mini cart count should be 1 
        cy.get('.css-raibn').should('include.text', '1')

        // click on the basket
        cy.get('[alt="Basket"]').click()
    
        // spinner (maybe) on the cart page 
        cy.get('.css-1enmcrj', {timeout: 60000}).should('be.visible')

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
        cy.get('.css-19eq64j').click()
        cy.url().should('eq', 'https://reservations.tremblant.ca/ecomm/Checkout/Customer/17793040')

        // verify the price om the inntopia page is the same as the estimated total from the cart page
        cy.get('.text-right').eq(2).should('include.text', '$1,067.04')
          
    })

    it('C29732 Book This Package', () => {

        // click on 'packages' button
        cy.get('.css-1rq4esi').eq(0).click()

        // click on the first book this package  
        cy.get('.css-we5dge').eq(2).click()

        // mini cart count should be 1 
        cy.get('.css-raibn').should('include.text', '1')

        // click on the basket
        cy.get('[alt="Basket"]').click()
    
        // spinner (maybe) on the cart page 
        cy.get('.css-1enmcrj', {timeout: 60000}).should('be.visible')

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
        cy.get('.css-19eq64j').click()
        cy.url().should('eq', 'https://reservations.tremblant.ca/ecomm/Checkout/Customer/17793040')

        // verify the price om the inntopia page is the same as the estimated total from the cart page
        cy.get('.text-right').eq(3).should('include.text', '$971.73')
          
    })    

    // it('C29741 Open bundle -> cancel -> check mini cart and should be empty', () => {

    //     // Click on 'Book Lodge Only'
    //     lodge.BookLodge().eq(0).click()
    //     // cy.wait(3000)

    //     // Verify the bundles pop up window is displayed
    //     bundles.BundlePopUp().should('be.visible')

    //     //Click on 'Cancel and exit' from the bundles
    //     //cy.get('.cancel').click()
    //     bundles.Cancel().click()
    //         // cy.wait(3000)

    //     //Click on 'mini cart' to open 
    //     cart.MiniCart().click()

    //     //Verify mini cart reads Emty Cart
    //     cart.EmptyCart().should('include.text', 'Empty Cart')

    //     //Verify verbiage on the mini cart when it's empty
    //     cart.EmptyCartMsg().should('include.text', "There's nothing in your cart")
    //         // cy.wait(3000)

    // })

    // // C29733
    // it('C29733 Click on Book Package', () => {
        
    //     // Click on 'Packages' 
    //     lodge.Packages().click()

    //     // Click on 'Book This Package' 
    //     lodge.BookPackage().eq(1).click()
    //     //    cy.wait(1500)

    //     // lick on 'Resort Lunch Voucher'
    //     bundles.BundleOption().contains('Resort Lunch Voucher').click()

    //     // Verify the selected option is found on Review Add-Ons
    //     bundles.ReviewAddOns().should('include.text', 'Resort Lunch Voucher')

    //     // Click on 'Next Step'
    //     bundles.NextStep().eq(0).click()

    //     // Verify the selected option is found on Review Add-Ons
    //     bundles.ReviewAddOns().should('include.text', 'Resort Lunch Voucher')
    //         .should('be.visible')

    //     //STEP2 added July 5

    //     // click on No Thanks button
    //     bundles.NoThanks().eq(1).click()

    //     // Click on 'Next Step'
    //     bundles.NextStep().eq(1).click()              

    //     // Add to Cart from Bundles
    //     bundles.AddToCart().click()
    //         // cy.wait(3000)

    //     // Verify the product name is found on the mini cart
    //     cart.Items().should('include.text', 'Package:')

    //     // Verify mini cart bundles option in mini cart
    //     cart.Items().should('include.text', 'Resort Lunch Voucher')
    //         .and('include.text', packageName)
    //         .and('include.text', oneBedroom)
        
    // })

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
