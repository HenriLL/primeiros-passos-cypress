const elementList ={
  visitSite: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  wrongCredentialAlert: "[role='alert']"
}

describe('Orange HRM Tests', () => {
  it('Login sucess', () => {
    cy.visit(elementList.visitSite)
    cy.get(elementList.usernameField).type('Admin')
    cy.get(elementList.passwordField).type('admin123')
    cy.get(elementList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(elementList.sectionTitleTopBar).contains('Dashboard')
  }) 

  it('Login Fail', () => {
    cy.visit(elementList.visitSite)
    cy.get(elementList.usernameField).type('Test')
    cy.get(elementList.passwordField).type('test')
    cy.get(elementList.loginButton).click()
    cy.get(elementList.wrongCredentialAlert)
    
  })
})