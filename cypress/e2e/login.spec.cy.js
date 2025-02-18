import userData from '../fixtures/userData.json'


describe('template spec', () => {
  
 const selectorList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert"
  }

  
  
  it('Login - passes', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})