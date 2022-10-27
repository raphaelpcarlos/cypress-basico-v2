///<reference types="cypress"/>

describe('Central de atendimento ao TAT Sessão 5', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })

  ///Exercício
  it('marca o tipo de atendimento "Feedback"',()=>{
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  ///Exercício extra
  it('marca cada tipo de atendimento',()=>{

    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })

  }) 
})