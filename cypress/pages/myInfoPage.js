class MyInfoPage {

    selectorsList () {
        const selectors = {
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
            genderSelector: ".oxd-radio-wrapper",
        }

        return selectors
    }

    fillPersonalDetails (firstName, midleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midleNameField).clear().type(midleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails (employeId, otherId, licenseNumber, expiryDate, dateOfBirth, testField){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).eq(0).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().genderSelector).eq(1).click()
        cy.get(this.selectorsList().testField).clear().type(testField)
        
    }

    saveForm () {
        cy.get(this.selectorsList().buttonSave).eq(0).click({ force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
    }    

    fillStatus () {
        cy.get(this.selectorsList().firstComboBox).eq(0).click()
        cy.get(this.selectorsList().secondComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thridComboBox).eq(2).click({force:true})
    }

}

export default MyInfoPage