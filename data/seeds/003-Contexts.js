exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("Contexts")
    .then(() => knex.raw('TRUNCATE TABLE "Contexts" RESTART IDENTITY CASCADE'))
    .then(() =>
      // Inserts seed entries
      knex("Contexts").insert([
        {
          ContextDescription: "on styling logic"
        },
        {
          ContextDescription: "on new react.js tech"
        },
        {
          ContextDescription: "on preprocessing"
        },
        {
          ContextDescription: "on javascript markup"
        },
        {
          ContextDescription: "on databases"
        }
      ])
    );
