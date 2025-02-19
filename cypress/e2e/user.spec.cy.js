import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'


const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()

describe('template spec', () => {
  
 const selectorList = {
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    midleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    buttonSave: "[type='submit']",
    testField: "[options='']",
    dateCloseButton: ".--close",
    firstComboBox: ".oxd-select-text-input",
    secondComboBox: ".oxd-select-text-input",
    thridComboBox: ".oxd-select-text-input",
    genderSelector: ".oxd-radio-wrapper"
  }

  
  
  it.only('User Info Update - Sucesses', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.verifyDashboardPage()
    
    /*
    

    
    
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First Name Test')
    cy.get(selectorList.midleNameField).clear().type('Midle Name Test')
    cy.get(selectorList.lastNameField).clear().type('Last Name Test')
    cy.get(selectorList.genericField).eq(4).clear().type('EmploTest')
    cy.get(selectorList.genericField).eq(5).clear().type('777Test')
    cy.get(selectorList.genericField).eq(6).clear().type('123Test')
    cy.get(selectorList.dateField).eq(0).clear().type('2025-10-12')
    cy.get(selectorList.dateCloseButton).eq(0).click()
    cy.get(selectorList.dateField).eq(1).clear().type('1990-21-04')
    cy.get(selectorList.buttonSave).eq(0).click({ force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    cy.get(selectorList.testField).clear().type('Test 777')
    cy.get(selectorList.firstComboBox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(11)').click()
    cy.get(selectorList.secondComboBox).eq(1).click({force: true})
    cy.get(selectorList.thridComboBox).eq(2).click({force:true})
    cy.get(selectorList.genderSelector).eq(1).click()*/
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.password, userData.userFail.password)
    loginPage.selectorsList().wrongCredentialAlert
  })
})