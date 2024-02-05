/// <reference types="cypress"/>

describe.only('Teste funcioonal de login', () => {
    it('Deve realizar o login com sucesso!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com.br")
        cy.get('#login__passwordField').type("")
        cy.get('#login__loginButton').click()
    });
});

describe('Teste funcional de erro de login]]', () => {
    it('Não deve ser realizado o login com sucesso!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com")
        cy.get('#login__passwordField').type("")
        cy.get('#login__loginButton').click()
    });
});