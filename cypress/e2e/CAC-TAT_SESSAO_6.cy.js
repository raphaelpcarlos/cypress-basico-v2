///<reference types="cypress"/>

describe('Central de atendimento ao TAT Sessão 6', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })

  ///Exercício
  it('marca ambos checkboxes, depois desmarca o último', ()=>{

    cy.get('input[type="checkbox"]')
       .check()
       .should('be.checked')
       .last()
       .uncheck()
       .should('not.be.checked')
  })

  ///Exercício extra
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{

    const longtext =  'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text '

    cy.get('#firstName').type('Raphael')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('rpc@email.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type(longtext,{delay:0})
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })
 
})