
// Importando o QueryBuilder
const knex = require('knex')

// Importando as configurações do arquivo knex e atribuindo a uma variável
const configuration = require('../knexfile')

// Realizando a conexão
const connection = knex(configuration)

// Exportando conexão
module.exports = connection