class Lodge {


    //mammoth headless

    MMLodgeListingEmpty() {
        cy.visit('https://develop-mammoth-alterra.vercel.app/test/lodging')
    }

    MammMultiUnitMmiDated() {
        cy.visit('https://develop-mammoth-alterra.vercel.app/lodging/mammoth-mountain-inn?ArrivalDate=2023-04-10&DepartureDate=2023-04-14&Adult=2&Child=0')
    }

    MammActivityResults() {
        cy.visit('https://develop-mammoth-alterra.vercel.app/test/mammothproducts#startDate=03-20-2023')
    }

    //mvc comparison site, using Stratton
    mvcLodgeListingEmpty() {
        cy.visit('https://stratton-sc10-dev.alterramtnco.dev/plan-your-trip/lodging')
    }
    
    // mvc multi unit 
    mvcMultiUnitMmiDated() {
        cy.visit('https://stratton-sc10-dev.alterramtnco.dev/plan-your-trip/lodging/mammoth-mountain-inn?arrivaldate=04/10/2023&departuredate=04/14/2023&Adult=2&Child=0')
    }

    //

    //Using Winter Park with 'production' data SalesID: 464207
    WPLodgeListing() {
        cy.visit('https://winterparkresort-sc10-dev.alterramtnco.dev/plan-your-trip/lodging?arrivaldate=03/27/2023&departuredate=03/30/2023&Adult=2&Child=0#_')
    }

    WPLodgeListingEmpty() {
        cy.visit('https://winterparkresort-sc10-dev.alterramtnco.dev/plan-your-trip/lodging')
    }

    uatWPLodgeListing() {
        cy.visit('https://winterparkresort-sc10-uat-content.alterramtnco.dev/plan-your-trip/lodging?arrivaldate=03/27/2023&departuredate=03/30/2023&Adult=2&Child=0#_')
    }    

    sc10WPLodgeListing() {
        cy.visit('https://winterparkresort-sc10-uat-content.alterramtnco.dev/plan-your-trip/lodging')
    }   
    
    UatWPLodgeListing() {
        cy.visit('https://winterparkresort-uat-content.alterramtnco.dev/plan-your-trip/lodging')
    }

    //Sugarbush LocationID: 662950 
    MultiunitPage () {
        cy.visit('https://sugarbush-uat-content.alterramtnco.dev/plan-your-trip/lodging/clay-brook-hotel-and-residences?arrivaldate=03/28/2022&departuredate=03/30/2022&Adult=2&Child=0')
    }

    //Deer Valley SalesID: 10616450 Bellemont8 LocationID: 11013249
    SingleunitPage () {
        cy.visit('https://deervalley-uat-content.alterramtnco.dev/plan-your-trip/explore-lodging/bellemont-8?arrivaldate=04/04/2022&departuredate=04/08/2022&Adult=2&Child=0')
    }

    sc10TrSingleLodge() {
        cy.visit('https://tremblant-sc10-uat-content.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges-single?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }    

    UatTrSingleLodge() {
        cy.visit('https://tremblant-uat-content.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges-single?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }

    //Using Solitude (seeing errors on mobile) Test SalesID: 5549517 The Inn At Solitude LocationID: 10002666 
    DevSingleUnit() {
        cy.visit('https://solitudemountain-dev.alterramtnco.dev/plan-your-trip/lodging/the-inn-at-solitude-single-unit?arrivaldate=04/14/2022&departuredate=04/17/2022&Adult=2&Child=0')
        // cy.visit('https://tremblant-dev.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges-single?arrivaldate=04/14/2022&departuredate=04/17/2022&Adult=2&Child=0')
    }

    //Using Tremblant Test SalesID: 5549517 LocationID: 10002666 
    DevTRSingleUnit() {
        cy.visit('https://tremblant-dev.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges-single?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }

    TRSingleUnitDev() {
        cy.visit('https://tremblant-sc10-dev.alterramtnco.dev/plan/hotels-condos/sommet-single?arrivaldate=11/09/2022&departuredate=11/12/2022&Adult=2&Child=0')
    }

    DevTRMultiUnit() {
        cy.visit('https://tremblant-dev.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }

    TRMultiUnitDev() {
        cy.visit('https://tremblant-sc10-dev.alterramtnco.dev/plan/hotels-condos/sommet-multi?arrivaldate=11/09/2022&departuredate=11/12/2022&Adult=2&Child=0')
    }

    FrTRMultiUnitDev() {
        cy.visit('https://tremblant-sc10-dev.alterramtnco.dev/planifiez/hotels-condos/sommet-multi?arrivaldate=11/09/2022&departuredate=11/12/2022&Adult=2&Child=0')
    }    

    sc10TrMultiLodge() {
        cy.visit('https://tremblant-sc10-uat-content.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }    

    UatTrMultiLodge() {
        cy.visit('https://tremblant-uat-content.alterramtnco.dev/plan/hotels-condos/sommet-des-neiges?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')
    }    

    DevTR12579630single() {
        cy.visit('https://tremblant-dev.alterramtnco.dev/plan/hotels-condos/12579630single?arrivaldate=08/09/2022&departuredate=08/12/2022&Adult=2&Child=0')

    }

    //Winter Park Zephyr Mountain Lodge LocationID: 468915
    DevWPMultiUnit() {
        cy.visit('https://winterparkresort-dev.alterramtnco.dev/plan-your-trip/lodging/zephyr-mountain-lodge?arrivaldate=09/12/2022&departuredate=09/19/2022&Adult=2&Child=0')
    }

    sc10WPMultiUnit() {
        cy.visit('https://winterparkresort-sc10-uat-content.alterramtnco.dev/plan-your-trip/lodging/zephyr-mountain-lodge?arrivaldate=05/15/2022&departuredate=05/17/2022&Adult=2&Child=0')
    }         

    LodgeName() {
        return cy.get('.name')
    }

    MapBox() {
        return cy.get('.lodging-map')
    }

    Map() {
        return cy.get("[data-val=map]")
    }

    ViewAll() {
        return cy.get('.view-all')
    }

    ViewLess() {
        return cy.get('.view-less')
    }

    //Test SalesID: 5549517 The Inn At Solitude LocationID: 10002666 
    DevMultiUnit() {
        cy.visit('https://solitudemountain-dev.alterramtnco.dev/plan-your-trip/lodging/the-inn-at-solitude?arrivaldate=04/14/2022&departuredate=04/17/2022&Adult=2&Child=0')
    }

    AvailabilityLinks() {
        return cy.get('.availability-links')
    }
    
    AvailabilityRoomType() {
        return cy.get('.room-type')
    }

    AvailabilityMobile() {
        return cy.get('.availability-button')
    }

    AvailabilityOption() {
        return cy.get('.availability-option')
    }

    InnMultiDetails() {
        return cy.get('.inntopia-multiunit-details')
    }

    RoomName() {
        return  cy.get('.room-name')
    }

    RoomTab() {
        return cy.get('.tab.tab')
    }

    TwoBedroomTab() {
        return cy.get('.tab-2')
    }

    BookLodge() {
        return cy.get('.book-now')
    }

    Packages() {
        return cy.get('.packages-button')
    }

    BookPackage() {
        return cy.get('.button.default')
    }

    CustomizePackage() {
        return cy.get('.package-builder-icon')
    }

    BundlePopUp() {
        return cy.get('.inntopia-bundles')
    }

    Cancel() {
        return cy.get('.cancel')
    }

    MobileDownArrow() {
        return cy.get('.order-summary-toggle').eq(0)
    }

    EmptyCart() {
        return cy.get('.empty-cart')
    }

    EmptyCartMsg() {
        return cy.get('.empty-cart-details')
    }
    
    ProceedToCart() {
        return cy.get('.view-cart-button')
    }

    AddToCart() {
        return cy.get('.add-to-cart').eq(0)
    }

    LodgesAvailable() {
        return cy.get('.results-found-text-wrapper')
    }

    LodgesNoResults() {
        return cy.get('.no-results')
    }

    SortBy() {
        return cy.get('.dropdown-selection')
    }      


}

export default Lodge