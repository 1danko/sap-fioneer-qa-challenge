/// <reference types="cypress" />

class navMenu {

    elements = {
        navMenuItem : () => cy.get('.menu-item-object-custom  .nav-top-link'),
        dropdownMenuItem: () => cy.get('.ux-menu-link'),
        getInTouchItem: () => cy.get('ul[class*="header-nav-main nav nav-right"] a[href="/contact/"]')
    }

    openDropdownItemFromNavMenu(navMenuItemValue, dropdownMenuItemValue){
        this.elements.navMenuItem()
            .contains(navMenuItemValue)
            .realHover();
        this.elements.dropdownMenuItem()
            .contains(dropdownMenuItemValue)
            .click({force: true});
    }
}

export default new navMenu();