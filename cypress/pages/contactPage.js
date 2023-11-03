/// <reference types="cypress" />

class contactPage {

    elements = {
        contactIframe : () => cy.get('#hs-form-iframe-0'),
        submitFormInput: '.actions input'
    }

    getContactUsIframe(){
        return cy
            .get('#hs-form-iframe-0')
            .its('0.contentDocument.body').should('not.be.empty')      
            .then(cy.wrap);
    }

    submitContactForm(){
        this.elements.contactIframe().scrollIntoView();
        this.getContactUsIframe()
            .find(this.elements.submitFormInput)
            .click({force: true});
    }

    validateAllTheErrorMessages(contactErrorFields){
        contactErrorFields.forEach((errorField) => {
            if(errorField["field"] === 'receive our latest updates'){  
                this.getContactUsIframe().xpath(`//div[@class='input' and contains(.,'${errorField["field"]}')]/following-sibling::ul[contains(., '${errorField["error"]}')]`)
                    .scrollIntoView()    
                    .should('be.visible');
            }
            else if(errorField["field"] === 'Please complete all'){
                this.getContactUsIframe().find('.hs_error_rollup')
                    .scrollIntoView()    
                    .should('contain', errorField.error)
                    .should('be.visible');  
            }
            else {
                this.getContactUsIframe().xpath(`//div/label[contains(.,'${errorField["field"]}')]/..//label[contains(.,'${errorField["error"]}')]`)
                    .scrollIntoView()    
                    .should('be.visible');
            }
        })  
    }
}

export default new contactPage();