class DashBoardPage {

    selectorsList() {
        const selectors ={
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
         }
        return selectors
    }

    verifyDashboardPage (){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().sectionTitleTopBar).contains('Dashboard')
    }


}

export default DashBoardPage