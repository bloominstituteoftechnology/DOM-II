describe('My first Test', function () {
    it('Gets types and asserts', function () {
        cy.visit('https://example.cypress.io')


        cy.pause()

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')


        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')


       /* cy.get('Name')
            .should('include', 'name')

        cy.get('Email')
            .type('great@email.com') */

        cy.get('password')
            .type('password')

        cy.get('checkbox').check()

        cy.get('checkbox').check()

        cy.get('.action-form').submit()
        .next().should('contain', '')

    })
})
