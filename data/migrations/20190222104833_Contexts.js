exports.up = (knex, Promise) =>
  knex.schema.createTable("Contexts", tbl => {
    tbl.increments("ContextID");
    tbl.string("ContextDescription").notNullable();
    tbl.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("Contexts");
