const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // URL base da aplicação
    // Permite usar cy.visit('/') em vez da URL completa
    baseUrl: 'https://www.saucedemo.com',

    // Gera screenshot automaticamente quando um teste falha
    screenshotOnRunFailure: true,

    // Grava vídeo da execução dos testes
    video: true,

    // Permite configurar eventos do Node (plugins)
    setupNodeEvents(on, config) {
      // Evento executado após a geração de um screenshot
      on('after:screenshot', (details) => {
        // Loga no terminal o caminho do screenshot gerado
        console.log('📸 Screenshot gerado:', details.path);
      });

      return config;
    },
  },
});
