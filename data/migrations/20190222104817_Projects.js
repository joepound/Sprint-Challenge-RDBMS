exports.up = (knex, Promise) =>
  knex.schema.createTable("Projects", tbl => {
    tbl.increments("ProjectID");
    tbl
      .string("ProjectName")
      .unique()
      .notNullable();
    tbl.text("ProjectDescription").notNullable();
    tbl.boolean("ProjectIsCompleted").notNullable();
    tbl.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("Projects");
