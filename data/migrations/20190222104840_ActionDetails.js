exports.up = (knex, Promise) =>
  knex.schema.createTable("ActionDetails", tbl => {
    tbl
      .integer("ActionID")
      .unsigned()
      .notNullable()
      .references("ActionID")
      .inTable("Actions")
      .onUpdate("CASCADE");
    tbl
      .integer("ContextID")
      .unsigned()
      .notNullable()
      .references("ContextID")
      .inTable("Contexts")
      .onUpdate("CASCADE");
    tbl.timestamps(true, true);

    tbl.primary(["ActionID", "ContextID"]);
  });

exports.down = (knex, Promise) =>
  knex.schema.dropTableIfExists("ActionDetails");
