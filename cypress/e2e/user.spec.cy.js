import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Sucesses', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.verifyDashboardPage()

    menuPage.acessingAllMenus()

    myInfoPage.fillPersonalDetails('First Name', 'Midle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId', '123', '2030-10-27', '1990-04-21', 'testField')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})