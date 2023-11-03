/// <reference types="cypress" />
import navMenu from "../pages/navMenu";
import financeControlPage from "../pages/financeEsgPages/financeControlPage";
import contactPage from "../pages/contactPage";

describe('SAP Fioneer E2E tests', () => {

    beforeEach(() => {        
        cy.fixture("SAPFioneerData").as("data");
        cy.visit(Cypress.config().baseUrl);
    });

    it('SAP Fioneer - Verify bookmarks in nav menu', function(){
        const bookmarksArray = this.data.bookmarks;
        bookmarksArray.forEach((bookmark) => {
            navMenu.elements.navMenuItem()
                .contains(bookmark)
                .should('be.visible')      
        })
    });

    it('SAP Fioneer - Verify redircting to the Financial Control page', function() {
        navMenu.openDropdownItemFromNavMenu('Finance & ESG', ' Financial Control ');
        cy.url()
            .should('include', this.data.financeControlPageData[0].url); 
        cy.title()
            .should('eq', this.data.financeControlPageData[0].title);
        financeControlPage.elements.optimizeSectionHeader()
            .scrollIntoView()
            .should('have.text', this.data.financeControlPageData[0].optimizationSectionHeader);
    });

    it('SAP Fioneer - Verify Contact Error messages', function(){
        navMenu.elements.getInTouchItem()
            .click();
        cy.url()
            .should('include', this.data.contactPageData[0].url); 
        cy.title()
            .should('eq', this.data.contactPageData[0].title);
        contactPage.submitContactForm();
        contactPage.validateAllTheErrorMessages(this.data.contactErrorMessageFields)
    });
})