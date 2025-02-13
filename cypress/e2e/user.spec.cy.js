import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const elementList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    dashboardGrid: "orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
    userName: ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
    userLastName: ".--name-grouped-field > :nth-child(2) > :nth-child(2) > .oxd-input",
    userUser: ":nth-child(3) > :nth-child(2) > .oxd-input",
    driversLicense: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    dateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    layout: ".oxd-layout-context"
  }

  it.only('User Info Update sucess', () => {
    cy.visit('/auth/login')
    cy.get(elementList.usernameField).type(userData.userSucess.username)
    cy.get(elementList.passwordField).type(userData.userSucess.password)
    cy.get(elementList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(elementList.sectionTitleTopBar).contains('Dashboard')
    cy.get(elementList.myInfoButton).click()
    cy.get(elementList.userName).clear().type('First Name')
    cy.get(elementList.userLastName).clear().type('Last Name')
    cy.get(elementList.userUser).clear().type('Only User')
    cy.get(elementList.driversLicense).clear().type('12345')
    cy.get(elementList.dateField).clear().type('2025-04-01')
    cy.get(elementList.layout).click()
  }) 

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(elementList.usernameField).type(userData.userFail.username)
    cy.get(elementList.passwordField).type(userData.userFail.password)
    cy.get(elementList.loginButton).click()
    cy.get(elementList.wrongCredentialAlert)
    
  })
})