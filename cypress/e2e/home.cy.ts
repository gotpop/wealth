import { careers } from './../../prisma/seed/tabItems';
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Homepage navigation', () => {
    it('Should have homepage title', () => {
        cy.visit('/')

        cy.get('h2').contains('THE DIGITAL NOISE MAKERS IN THE FINANCIAL SPACE.')
    })

    it('Should scroll to the tab panel and show pirate item when clicked', () => {
        cy.visit('/')
        
        cy.get('[data-cy="tab-button-1"]').click()
        cy.contains('Pirate')
    })

    it('Scroll to the bottom and find view button', () => {
        cy.visit('/')
        cy.scrollTo('bottom')

        cy.contains('VIEW ALL OF OUR LATEST')
    })
})

export { }