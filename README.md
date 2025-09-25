# API de Gerenciamento de Tarefas (To-do List)

## 1. Descrição do Projeto
Como solicitado no documento em PDF, criei uma API REST simples usando Node.js e Express para gerenciar uma lista de tarefas (To-do List) desenvolvida como trabalho de recuperação da disciplina de **Desenvolvimento FullStack**. A API permite o gerenciamento de uma lista de tarefas CRUD (Create, Read, Update, Delete), armazenando as tarefas em memória (um array simples, sem banco de dados). Toda a comunicação é feita via JSON, e eu testei tudo no Postman, como exigido.
O projeto é básico, mas funcional, e roda sem erros. Usei Node.js v22.19.0. Como algumas tarefas, inseri tarefas do meu dia a dia, como "Estudar para a prova do Chico" e também "Fazer entrega 1 do PI da Cristina". 

## 2. Pré-requisitos
Antes de rodar o projeto, é necessário ter:
- Node.js instalado. [node.js](https://nodejs.org) 
- npm (gerenciador de pacotes, que vem junto com o Node.js). 
- Um editor de código, como VS Code (que é opcional, mas me ajudou).
- Postman instalado para testar as rotas[postman.com](https://www.postman.com). 

Não precisa de mais nada – o projeto usa só Express para o servidor.

## 3. Instruções para Instalar as Dependências
Siga esses passos para preparar o ambiente:

1. Clone ou baixe o repositório do GitHub para uma pasta.
2. Abra o terminal e navegue até a pasta do projeto (ex: `cd to-do-list`).
3. Instale as dependências com o comando:
npm install
Isso vai baixar o Express (listado no `package.json`) e criar a pasta `node_modules/`. Pode demorar um pouquinho na primeira vez, mas é só uma vez.

## 4. Comando para Iniciar o Servidor
Para rodar a API:

1. No terminal, na pasta do projeto, execute:
npm start
Ou, se preferir: `node server.js`.

2. Você deve ver no terminal:
Servidor rodando em http://localhost:3000
Isso significa que a API está ativa! Deixe o terminal aberto. Para parar, pressione Ctrl+C.

A API roda na porta 3000 (pode mudar no código se houver conflito). Teste acessando `http://localhost:3000/tarefas` no navegador.

Obrigada pela oportunidade de recuperação! 😊
