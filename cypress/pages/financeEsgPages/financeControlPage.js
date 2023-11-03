/// <reference types="cypress" />

class financeControlPage {

    elements = {
        optimizeSectionHeader : () => cy.get('div[class="row"] .NormalTextRun'),
    }
}

export default new financeControlPage();