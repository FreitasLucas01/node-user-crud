# 📌 User API – Node.js + Express + Sequelize

Uma API RESTful desenvolvida com **Node.js**, **Express** e **Sequelize (MySQL)** para gerenciar usuários.  
O projeto foi criado como prática de back-end e pode servir como base para autenticação, CRUD de usuários e aprendizado sobre boas práticas de desenvolvimento.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

---

## ⚙️ Funcionalidades

- Criar usuário (Create)
- Listar todos usuários (Read)
- Buscar usuário por ID (Read)
- Atualizar usuário (Update)
- Deletar usuário (Delete)

🔒 **Segurança:**  
- O campo **password nunca é retornado nas respostas da API** (uso de `defaultScope` no Sequelize).

---

```markdown
## 📂 Estrutura do Projeto

```text
src/
├── api/        # Controllers (recebem req/res e chamam os services)
├── services/   # Lógica de negócio (comunicação com os models)
├── model/      # Definição das tabelas Sequelize
├── routes/     # Rotas Express
├── database.js # Configuração do Sequelize e conexão
└── index.js    # Ponto de entrada da aplicação

---

## 🛠️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/user-api.git
   cd user-api


2. Instale as dependências:
   ```bash
   npm install

