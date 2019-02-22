exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("Projects")
    .truncate()
    .then(() =>
      // Inserts seed entries
      knex("Projects").insert([
        {
          ProjectName: "UI".toUpperCase(),
          ProjectDescription: "User Interface",
          ProjectIsCompleted: true
        },
        {
          ProjectName: "FE".toUpperCase(),
          ProjectDescription: "Front End",
          ProjectIsCompleted: true
        },
        {
          ProjectName: "BE".toUpperCase(),
          ProjectDescription: "Back End",
          ProjectIsCompleted: false
        }
      ])
    );
