/// <reference types="cypress"/>

describe('Filter devices dots', () => {
    it('testing filter devices', () => {
        cy.visit("https://dots-stg.ayga.com.br")
        cy.url().should('include', '/')
    });

    it('testing filter ID', () => {
        cy.visit("https://dots-stg.ayga.com.br")
        cy.url().should('include', '/login?redirect=%2F')

        // Input e-mail adress and password
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com.br")
        cy.get('#login__passwordField').type("desde1909@")

        cy.get('#login__loginButton').click()

        // Aguarda até que a navegação seja concluída para a página inicial
        cy.url().should('not.include', '/login?redirect=%2F')

        // Visita a página desejada após o login
        cy.visit("https://dots-stg.ayga.com.br/")

        // Agora você pode realizar a ação desejada na página
        cy.url().should('include', '/')
        cy.get('#input-275').type('006')
    });

    it.only('teste', () => {
        cy.visit("https://dots-stg.ayga.com.br/")
        cy.url().should('include' , '/')
    });
});


