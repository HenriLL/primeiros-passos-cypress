describe('template spec', () => {
  
 const selectorList = {
    userNameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: ".oxd-alert"
  }
  
  it('Login - passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('teste')
    cy.get(selectorList.passwordField).type('teste')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})