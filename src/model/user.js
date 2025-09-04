// Configurar o modelo

const database = require("../database");

class User {
  constructor() {
    this.model = database.db.define(
      "users",
      {
        // Atributos da tabela, ou seja, as colunas da tabela.
        id: {
          type: database.db.Sequelize.INTEGER,
          // id é uma chave primária e única.
          primaryKey: true,
          // Ele é autoincrementado, ou seja, vai cirar um novo id
          //conforme vou criando novas coisas.
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: database.db.Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: database.db.Sequelize.STRING,
          // O email deve ser unique, ou seja, não pode haver
          //outro email com mesmo nome (ex: dois email@gmail.com)
          unique: true,
          allowNull: false,
        },
        password: {
          type: database.db.Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        // Escopo padrão: nunca retorna o campo password
        defaultScope: {
          attributes: { exclude: ["password"] },
        },
      }
    );
  }
}

module.exports = new User();
