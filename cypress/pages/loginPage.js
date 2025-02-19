class LoginPage {

    selectorsList () {
        const selectors = {
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button",
            wrongCredentialAlert: ".oxd-alert",
        }

        return selectors
    }

    acessLoginPage (){
        cy.visit('/auth/login')
    }

    loginWithAnyUser (username, password){
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

}

export default LoginPage