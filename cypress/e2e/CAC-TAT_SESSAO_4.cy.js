///<reference types="cypress"/>

describe('Central de atendimento ao TAT Sessão 4', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })

  ///Exercício
  it('seleciona um produto (YouTube) por seu texto',()=>{
    cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
  })

  ///Exercício extra 1
  it('seleciona um produto (Mentoria) por seu valor (value)',()=>{
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  ///Exercício extra 2
  it('seleciona um produto (Blog) por seu índice',()=>{
    cy.get('#product')
      .select(1)
      .should('have.value', 'Blog')
  })

})