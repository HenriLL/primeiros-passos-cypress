import userData from '../fixtures/userData.json'

class MenuPage {

    selectorsList () {
        const selectors = {
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        adminButton: "[href='/web/index.php/admin/viewAdminModule']",
        pimButton: "[href='/web/index.php/pim/viewPimModule']",
        leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
        timeButton: "[href='/web/index.php/time/viewTimeModule']",
        recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
        performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
        directoryButton: "[href='/web/index.php/directory/viewDirectory']",
        maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
        claimButton: "[href='/web/index.php/claim/viewClaimModule']",
        buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        //maintanceNameUser: "[name='username']",
        maintancePassword: "[type='password']",
        maintanceButton: "[type='submit']",

    }
    return selectors
    }

    acessigMyInfo () {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    acessingAdmin () {
        cy.get(this.selectorsList().adminButton).click()
    }

    acessingPIM () {
        cy.get(this.selectorsList().pimButton).click()
    }

    acessingLeave () {
        cy.get(this.selectorsList().leaveButton).click()
        cy.get('body').should('contain', 'No Records Found')
    }

    acessingTime () {
        cy.get(this.selectorsList().timeButton).click()
    }

    acessingRecruitment () {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    acessingPerformance () {
        cy.get(this.selectorsList().performanceButton).click()
        cy.get('body').should('contain', 'No Records Found')
    }

    acessingDirectory () {
        cy.get(this.selectorsList().directoryButton).click()
    }

    acessingMaintenance () {
        cy.get(this.selectorsList().maintenanceButton).click()
        cy.visit('/maintenance/purgeEmployee')
        //cy.get(this.selectorsList().maintanceNameUser).click({ force: true }).type(userData.userSucess.username)
        cy.get(this.selectorsList().maintancePassword).click({ waitForAnimations: false }).type(userData.userSucess.password)
        cy.get(this.selectorsList().maintanceButton).click()
    }

    acessingClaim () {
        cy.get(this.selectorsList().claimButton).click()
    }

    acessingBuzz () {
        cy.get(this.selectorsList().buzzButton).click()
    }
}

export default MenuPage