/// <reference types="cypress"/>

describe('Testing security in login', () => {
    it('E-mail adress invalid!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")

        //cconfirmed url login
        cy.url().should('include', 'login')

        //input e-mail adress and password
        cy.get('#login__emailField').type("gabriel")
        cy.get('#login__passwordField').type("desde")

         //input e-mail adress and password
        cy.get('#login__loginButton').click()
        cy.wait(4000);
    });
    it('Password invalid', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")

        //confirmed url login
        cy.url().should('include', 'login')

        //input e-mail adress and password
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com.br")
        cy.get('#login__passwordField').type("desde")

        //post send date
        cy.get('#login__loginButton').click()
        cy.wait(4000)
    });

    it('E-mail adress and password invalid', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")

        //confirmed url login
        cy.url().should('include', 'login')

        //input e-mail adress and password incorrect
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com.b")
        cy.get('#login__passwordField').type("desde")

        //post send date
        cy.get('#login__loginButton').click()
        cy.wait(4000)     
    });

});

describe('login functional test', () => {
    it('Deve ser realizado o login com sucesso!', () => {
        cy.visit("https://dots-stg.ayga.com.br/login")

        //Certifica-se de estar na página login
        cy.url().should('include', 'login')

        //Executa o login
        cy.get('#login__emailField').type("gabriel.rocha@ayga.com.br")
        cy.get('#login__passwordField').type("desde1909@")
        cy.get('#login__loginButton').click()

        //Aguarda até que um elemento específico apareça após o login
        /*cy.contains('Bem vindo').should('exist')*/

        //Após a confirmação de outra página, o teste entra em outro url
        cy.visit("https://dots-stg.ayga.com.br")
        cy.url().should('include', '/')
    });
});

