describe('Tela de Login - AmplifyApp', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Failed to fetch')) {
      return false; // Ignora erro esperado de back
    }
  });
  
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('https://staging.d2pnv8jp5au9a7.amplifyapp.com');
  });

 it('Login de administrador com dados válidos', () => {
  cy.get('#email').type('admin@teste.com');
  cy.get('#password').type('123456');
  cy.get('[data-test="submit"]').click();
  cy.wait(2000);
  cy.window().then((win) => {
    expect(win.localStorage.getItem('logged')).to.eq('true');
  });
  cy.contains('Deslogar').should('be.visible');
});

  it('Login com senha incorreta', () => {
    cy.get('#email').type('admin@teste.com');
    cy.get('#password').type('senhaErrada');
    cy.get('[data-test="submit"]').click();
    cy.get('#login-error').should('contain', 'Erro ao fazer login');
  });

  it('Login com campos vazios', () => {
    cy.get('[data-test="submit"]').click();
    cy.get('#login-error')
      .should('contain', 'Erro ao fazer login')
      .and('be.visible'); 
  });
});