# Banco API Tests

Este repositório contém um conjunto de testes automatizados para a [Banco API](https://github.com/danicsl23/banco-api).  
O objetivo é validar os principais endpoints da API REST garantindo consistência, confiabilidade e integridade das respostas.

---

## 🚀 Objetivo

Fornecer uma suíte de testes automatizados para validar o comportamento da API de banco, cobrindo operações como criação, atualização, exclusão e consulta de recursos.  
O projeto busca facilitar a integração contínua e auxiliar no desenvolvimento seguro da API.

---

## 🛠️ Stack Utilizada

- [JavaScript (Node.js)](https://nodejs.org/) - linguagem 
- [Mocha](https://mochajs.org/) – framework de testes  
- [Chai](https://www.chaijs.com/) – biblioteca de asserções  
- [Supertest](https://github.com/ladjs/supertest) – requisições HTTP para testes de APIs  
- [Mochawesome](https://github.com/adamgruber/mochawesome) – geração de relatórios em HTML  
- [dotenv](https://github.com/motdotla/dontenv) - gerenciamento de variáveis de ambiente
---

## 📂 Estrutura de Diretórios

```bash
banco-api-tests/
├── test/              # Diretório principal com os arquivos de teste
│   ├── login.test.js
│   ├── transferencias.test.js   
├── mochawesome-report/ # Diretório gerado automaticamente com relatórios em HTML
├── .env.example        # Exemplo de variáveis de ambiente BASE_URL
├── package.json
└── README.md
```

---

## ⚙️ Configuração do `.env`

Para executar os testes, é necessário criar um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

> Substitua a URL acima pela URL real onde a API está sendo executada.

---

## ▶️ Executando os Testes

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

---

## 📊 Relatórios

Após a execução, o **Mochawesome** gera automaticamente um relatório em HTML no diretório `mochawesome-report`.

Para abrir o relatório, basta localizar o arquivo gerado (`mochawesome.html`) e abrir em seu navegador.

---

## 📚 Documentação das Dependências

- [Node.js](https://nodejs.org/)  
- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Supertest](https://github.com/ladjs/supertest)  
- [Mochawesome](https://github.com/adamgruber/mochawesome)  
- [dotenv](https://github.com/motdotla/dontenv) - gerenciamento de variáveis de ambiente
---

## 📌 Links Relacionados

- [Repositório da API](https://github.com/danicsl23/banco-api)  
- [Repositório dos testes](https://github.com/danicsl23/banco-api-tests)  
