
exports.up = function(knex) {
  return knex.schema.createTable('aluno', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('curso').notNullable();
    table.string('nascimento').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('aluno')
};
