exports.up = function (knex) {
  return knex.schema.table("aluno", function (table) {
    table.renameColumn("name", "nome");
  });
};

exports.down = function (knex) {
  return knex.schema.table("aluno", function (table) {
    table.renameColumn("nome", "name");
  });
};
