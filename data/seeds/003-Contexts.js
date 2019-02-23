exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("Contexts")
    .truncate()
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
        },
      ])
    );
