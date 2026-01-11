# 🧪 Automação Web com Cypress – Avaliação técnica Finaya

Este projeto faz parte de um **desafio técnico para a vaga de QA Sênior**, com foco em **automação de testes end-to-end (E2E)** utilizando **Cypress e JavaScript**.

O objetivo é validar funcionalidades essenciais do sistema **SauceDemo**, demonstrando boas práticas de automação, organização de projeto, reutilização de código e integração contínua.

---

## 🎯 Objetivos do Projeto

- Criar testes automatizados E2E utilizando Cypress  
- Validar elementos visíveis na interface  
- Realizar interações simples com a aplicação  
- Utilizar asserções com `should`  
- Aplicar boas práticas de automação (fixtures, custom commands)  
- Configurar execução automatizada via **GitHub Actions**  

---

## 🛠 Tecnologias Utilizadas

- **Node.js** (>= 18)  
- **Cypress 15+**  
- **JavaScript**  
- **GitHub Actions**  

---

## 🌐 Sistema Testado

- **URL:** https://www.saucedemo.com  
- **Descrição:** Aplicação web de demonstração usada para testes automatizados, contendo fluxo de login, listagem de produtos e carrinho de compras.

---

## 📁 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── produtos.cy.js
│   │   └── carrinho.cy.js
│   ├── fixtures/
│   │   └── users.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📦 Instalação do Projeto

### Pré-requisitos
- Node.js instalado
- Git instalado

### Passos
```bash
git clone https://github.com/FichesteR/avaliacao-cypress-finaya.git
cd avaliacao-cypress-finaya
npm install
```

---

## ▶️ Execução dos Testes

### Modo interativo
```bash
npx cypress open
```

### Modo headless
```bash
npx cypress run
```

---

## 🧩 Estratégia de Automação

### Fixtures
Os dados de usuários estão centralizados em `users.json`, facilitando manutenção e reutilização.

### Custom Commands
Foram criados comandos reutilizáveis para login e login com sucesso, reduzindo duplicação de código.

### Logs e Evidências
- Screenshots automáticos em falhas
- Vídeos da execução
- Logs adicionais para facilitar análise

---

## 🔄 Integração Contínua (CI)

Pipeline configurada com **GitHub Actions**, executando testes automaticamente em `push` e `pull requests`, com upload de evidências (screenshots e vídeos).

Arquivo:
```
.github/workflows/cypress.yml
```

---

## 📌 Boas Práticas Aplicadas

- Código organizado e comentado
- Uso de fixtures
- Reutilização com custom commands
- Commits semânticos
- CI documentada

---

## 👤 Autor

Projeto desenvolvido por **Vinícius Planellis**  
Avaliação técnica – QA Sênior

---

## ✅ Considerações Finais

Este projeto foi construído com foco em **clareza, organização e boas práticas de automação**, para atender aos requisitos propostos na avaliação técnica.