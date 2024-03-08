/// <reference types="cypress"/>

describe('Teste funcioonal de cadastro de novo usuário já cadastrado', () => {
    it('Deve realizar o cadastro com sucesso!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")
        cy.url().should('include', 'login')
        cy.get('#login__goToSignUp > .v-chip__content').click()
    });
    it.only('Deve preencher os campos com os dados do novo usuário', () => {
        cy.visit("https://dots-stg.ayga.com.br/sign-up")
        cy.url().should('include', 'sign-up')
        cy.get('#input-37').type('Gabriel')
        cy.get('#input-41').type('da Rocha')
        cy.get('#input-45').type('gabriel.rocha@ayga.com.br')
        cy.get('#password').type('Desde1909@')         

        cy.wait(3000)
    });

    it.only('Ja possui conta', () => {
        cy.visit("https://dots-stg.ayga.com.br/sign-up")
        cy.url().should('include', 'sign-up')
        cy.get('.ma-3 > .v-chip__content').click()
    });
});