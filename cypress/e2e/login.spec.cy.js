const elementList ={
  visitSite: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  dashboardGrid: "orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']"
}

const userData ={
  userSucess:{
    username: 'Admin',
    password: 'admin123'
  },
  userFail:{
    username: 'teste',
    password: 'teste'
  }
}

describe('Orange HRM Tests', () => {
  it('Login sucess', () => {
    cy.visit(elementList.visitSite)
    cy.get(elementList.usernameField).type(userData.userSucess.username)
    cy.get(elementList.passwordField).type(userData.userSucess.password)
    cy.get(elementList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(elementList.sectionTitleTopBar).contains('Dashboard')
  }) 

  it('Login Fail', () => {
    cy.visit(elementList.visitSite)
    cy.get(elementList.usernameField).type(userData.userFail.username)
    cy.get(elementList.passwordField).type(userData.userFail.password)
    cy.get(elementList.loginButton).click()
    cy.get(elementList.wrongCredentialAlert)
    
  })
})