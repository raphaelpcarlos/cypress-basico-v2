/// <reference types='cypress'/>

describe('Central de atendimento ao TAT Sessão 6', ()=>{

  before(()=>{
    cy.visit('./src/index.html')
  })

  beforeEach(()=>{
    cy.reload()
  })


  it('seleciona um arquivo da pasta fixtures',()=>{
    cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it.only('seleciona um arquivo simulando um drag-and-drop',()=>{
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  })

  it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',()=>{
    cy.fixture('example.json').as('samplefile')
    cy.get('input[type="file"]')
    .selectFile('@samplefile',{action:'drag-drop'})
    .should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')
    })
  })
})
