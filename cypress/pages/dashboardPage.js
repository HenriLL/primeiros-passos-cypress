class DashBoardPage {

    selectorsList() {
        const selectors ={
            dashboardGrid: ".orangehrm-dashboard-grid",
         }
        return selectors
    }

    verifyDashboardPage (){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default DashBoardPage