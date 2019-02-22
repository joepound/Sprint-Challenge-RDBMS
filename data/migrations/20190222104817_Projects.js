exports.up = (knex, Promise) =>
  knex.schema.createTable("Projects", tbl => {
    tbl.increments("ProjectID");
    tbl
      .string("ProjectName")
      .unique()
      .notNullable();
    tbl.text("ProjectDescription").notNullable();
    tbl.boolean("ProjectIsCompleted").defaultTo(false);
    tbl.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("Projects");
