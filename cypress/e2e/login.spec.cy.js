import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()


describe('Login - Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.password, userData.userFail.password)
    loginPage.selectorsList().wrongCredentialAlert
  })

  it('Login - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.verifyDashboardPage()
  })

})