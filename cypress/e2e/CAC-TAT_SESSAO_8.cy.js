/// <reference types='cypress'/>

describe('Central de atendimento ao TAT Sessão 6', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
  })

  it.only('acessa a página da política de privacidade removendo o target e então clicanco no link', ()=>{
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
    cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()
      
      cy.contains('Talking About Testing').should('be.visible')
  })

})
