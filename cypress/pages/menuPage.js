class MenuPage {

    selectorsList () {
        const selectors = {
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
    }
    return selectors
    }

    acessigMyInfo () {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    acessingAdmin (){
        cy.get(this.selectorsList().adminButton).click()
    }


    //FAZER O RESTANTE DOS MENUS!





}

export default MenuPage