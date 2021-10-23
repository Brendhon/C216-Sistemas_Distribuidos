const db_config = require("./db.json");

module.exports = {
  client: 'pg',
  connection: {
    host : db_config.POSTGRES_HOST,
    port : db_config.POSTGRES_PORT,
    user : db_config.POSTGRES_USER,
    password : db_config.POSTGRES_PASSWORD,
    database : db_config.POSTGRES_DATABASE,
  },
  migrations: {
    directory: './database/migrations'
  },
}