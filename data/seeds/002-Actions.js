exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("Actions")
    .then(() => knex.raw('TRUNCATE TABLE "Actions" RESTART IDENTITY CASCADE'))
    .then(() =>
      // Inserts seed entries
      knex("Actions").insert([
        {
          ProjectID: 1,
          ActionDescription: "PostCSS",
          ActionNotes: "Try and Post some CSS -> PostCSS... get it?",
          ActionIsCompleted: false
        },
        {
          ProjectID: 2,
          ActionDescription: "React Hooks",
          ActionNotes: "Get hooked on Hooks.",
          ActionIsCompleted: true
        },
        {
          ProjectID: 2,
          ActionDescription: "React Suspense",
          ActionNotes: "The suspense is killing me....",
          ActionIsCompleted: true
        },
        {
          ProjectID: 2,
          ActionDescription: "TSX",
          ActionNotes: "Rock that TypeScript!",
          ActionIsCompleted: false
        },
        {
          ProjectID: 2,
          ActionDescription: "Firebase",
          ActionNotes: "All your base are fire.",
          ActionIsCompleted: false
        },
        {
          ProjectID: 3,
          ActionDescription: "PostgreSQL",
          ActionNotes: "Pregres, progress, congress, Postgre....",
          ActionIsCompleted: true
        },
        {
          ProjectID: 3,
          ActionDescription: "GraphQL",
          ActionNotes: "Graph the query, not the function.",
          ActionIsCompleted: false
        }
      ])
    );
