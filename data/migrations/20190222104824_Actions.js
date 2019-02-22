exports.up = (knex, Promise) =>
  knex.schema.createTable("Actions", tbl => {
    tbl.increments("ActionID");
    tbl
      .integer("ProjectID")
      .unsigned()
      .notNullable()
      .references("ProjectID")
      .inTable("Projects")
      .onUpdate("CASCADE");
    tbl.string("ActionDescription").notNullable();
    tbl.text("ActionNotes").notNullable();
    tbl.boolean("ActionIsCompleted").notNullable();
    tbl.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("Actions");
