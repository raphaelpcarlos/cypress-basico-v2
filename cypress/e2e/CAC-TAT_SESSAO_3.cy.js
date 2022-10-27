///<reference types="cypress"/>

describe('Central de atendimento ao TAT Sessão 3', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })


  it('Verificar o titulo da aplicação', ()=>{
    
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  ///Exercício e Exercício extra 2 
  it('preenche os campos obrigatórios e envia o formulário', ()=>{

    const longtext =  'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text '

    cy.get('#firstName').type('Raphael',{delay:200})
    cy.get('#lastName').type('Carlos',{delay:200})
    cy.get('#email').type('rpc@email.com',{delay:200})
    cy.get('#phone').type('9999999999',{delay:200})
    cy.get('#open-text-area').type(longtext,{delay:0})
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  ///Exercício extra 2  
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', ()=>{

    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  ///Exercício extra 3
  it('Validar valor númerica para o telefone', ()=>{
    cy.get('#phone')
      .type('teste',{delay:200})
      .should('have.value', '')
  })

  ///Exercício extra 4
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{

    const longtext =  'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text '

    cy.get('#firstName').type('Raphael')
    cy.get('#lastName').type('Carlos')
    cy.get('#email').type('rpc@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type(longtext,{delay:0})
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
    
  })

    ///Exercício extra 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', ()=>{
      cy.get('#firstName')
          .type('Raphael')
          .should('have.value', 'Raphael')
      cy.get('#lastName')
          .type('Carlos')
          .should('have.value', 'Carlos')
      cy.get('#email')
          .type('rpc@email.com')
          .should('have.value', 'rpc@email.com')
      cy.get('#phone')
          .type('9999999999')
          .should('have.value', '9999999999')
      
      cy.get('#firstName')
          .clear()
          .should('have.value', '')
      cy.get('#lastName')
          .clear()
          .should('have.value', '')
      cy.get('#email')
          .clear()
          .should('have.value', '')
      cy.get('#phone')
          .clear()
          .should('have.value', '')
    })

    ///Exercício extra 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', ()=>{

      cy.get('button[type="submit"]').click()

      cy.get('.error').should('be.visible')
    })

    ///Exercício extra 7
    it.only('envia o formuário com sucesso usando um comando customizado',()=>{
      cy.fillMandatoryFieldsAndSubmit()

          cy.get('.success').should('be.visible')
    })

    ///Exercício extra 8
    it.only('Utilizando contains', ()=>{

      cy.get('#firstName').type('Raphael')
      cy.get('#lastName').type('Carlos')
      cy.get('#email').type('rpc@email.com')
      cy.get('#open-text-area').type('teste')

      cy.contains('button', 'Enviar').click()

    })

    


})