/// <reference types="cypress" />


describe('SAP Fioneer E2E tests', () => {

    beforeEach(() => {        
        cy.fixture("SAPFioneerData").as("data");
        cy.visit('https://www.sapfioneer.com');
    });

    it('SAP Fioneer - Verify bookmarks', function(){
        const bookmarksArray = this.data.bookmarks;
        bookmarksArray.forEach((bookmark) => {
            cy.get('.menu-item-object-custom  .nav-top-link')
                .contains(bookmark)
                .should('be.visible')      
        })
    });

    it('SAP Fioneer - Verify redircting to the Financial Control page', () => {
        cy.contains('.menu-item-object-custom  .nav-top-link', 'Finance & ESG')
            .realHover();
        cy.get('.ux-menu-link')
            .contains(' Financial Control ')
            .click();
        cy.url().should('include', '/finance-esg/financial-control/'); 
        cy.title()
            .should('eq', 'SAP Fioneer | Financial Control | Optimise accounting & finance');
        cy.get('#section_1252223212 .NormalTextRun')
            .should('have.text', 'Optimize workflows and resources');
    });

    it('SAP Fioneer - Verify Contact validation messages', function(){
        cy.get('ul[class*="header-nav-main nav nav-right"] a[href="/contact/"]')
            .click();
        cy.url().should('include', '/contact/'); 
        cy.title()
            .should('eq', 'SAP Fioneer | Contact | Get in touch!');
        cy.get('h1')
            .should('have.text', 'Contact us');
        cy.get('#hs-form-iframe-0').scrollIntoView();
        cy.getContactUsIframe()
            .find('.actions input')
            .click({force: true});
            
        cy.log("TEST DATA this.data.errorFields: " + this.data.errorFields);
        this.data.errorFields.forEach((errorField) => {
            cy.log("TEST DATA errorField[\"field\"]:" + errorField["field"]);
            cy.log("TEST DATA errorField.field" + errorField.field);
            if(errorField["field"] === 'receive our latest updates'){  
                cy.getContactUsIframe().xpath(`//div[@class='input' and contains(.,'${errorField["field"]}')]/following-sibling::ul[contains(., '${errorField["error"]}')]`)
                    .scrollIntoView()    
                    .should('be.visible');
            }
            else if(errorField["field"] === 'Please complete all'){
                cy.getContactUsIframe().find('.hs_error_rollup')
                    .scrollIntoView()    
                    .should('contain', errorField.error)
                    .should('be.visible');  
            }
            else {
                cy.getContactUsIframe().xpath(`//div/label[contains(.,'${errorField["field"]}')]/..//label[contains(.,'${errorField["error"]}')]`)
                    .scrollIntoView()    
                    .should('be.visible');
            }
        })  
    });
})