// Importa todos os comandos customizados
import './commands';

// Listener global de falhas
// Executa sempre que um teste falhar
Cypress.on('fail', (error, runnable) => {

  // Loga a mensagem de erro no relatório do Cypress
  cy.log('❌ Teste falhou:', error.message);

  // Re-lança o erro para que o teste continue falhando
  // (não mascarar falhas)
  throw error;
});
