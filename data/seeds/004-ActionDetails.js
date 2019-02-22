exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("ActionDetails")
    .truncate()
    .then(() =>
      // Inserts seed entries
      knex("ActionDetails").insert([
        {
          ActionID: 1,
          ContextID: 1
        },
        {
          ActionID: 1,
          ContextID: 3
        },
        {
          ActionID: 2,
          ContextID: 1
        },
        {
          ActionID: 3,
          ContextID: 1
        },
        {
          ActionID: 2,
          ContextID: 2
        },
        {
          ActionID: 3,
          ContextID: 2
        },
        {
          ActionID: 4,
          ContextID: 4
        },
        {
          ActionID: 5,
          ContextID: 5
        },
        {
          ActionID: 6,
          ContextID: 5
        },
        {
          ActionID: 7,
          ContextID: 5
        },
      ])
    );
