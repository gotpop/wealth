/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Homepage navigation', () => {
    it('Should have homepage title', () => {
        cy.visit('/')

        cy.get('h2').contains('THE DIGITAL NOISE MAKERS IN THE FINANCIAL SPACE.')
    })

    // it('Should scroll to the first panel when hero button is clicked', () => {
    //     cy.visit('/')
        
    //     cy.get('.LinkIcon_link__1TjqX').click({ force: true })
    //     cy.contains('@container queries')
    // })

    // it('Scroll to the bottom and find 3 links', () => {
    //     cy.visit('/')
    //     cy.scrollTo('bottom')

    //     cy.contains('Local')
    //     cy.contains('GitHub')
    //     cy.contains('Live')
    // })
})

export { }