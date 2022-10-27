Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    

    cy.get('#firstName').type('Raphael')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('rpc@email.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})
