/// <reference types="cypress"/>

describe('Teste funcioonal de cadastro de novo usuário já cadastrado', () => {
    it('Deve realizar o cadastro com sucesso!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")
        cy.get('#login__goToSignUp > .v-chip__content').click()
    });
    it('Deve preencher os campos com os dados do novo usuário', () => {
        cy.visit("https://dots-stg.ayga.com.br/sign-up")
        cy.get('#input-37').type('Gabriel')
        cy.get('#input-41').type('da Rocha')
        cy.get('#input-45').type('')
        cy.get('#password').type('')
        cy.get('#new-password').type('')
    });
});