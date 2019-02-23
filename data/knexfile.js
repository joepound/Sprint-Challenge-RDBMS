const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  // For Knex CLI only (use config named "server" for actual dev use) - need to do this for file pathing
  development: {
    client: "sqlite3",
    connection: {
      filename: "./gtd.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
    // Will not turn on foreign key constraints to enable deletion (this is needed to allow seeds to run)
  },

  // For actual dev use
  devServer: {
    client: "pg",
    connection:
      "postgres://drikmtkppkdjlg:d861aaa27c40567e80da0c9cc288f7265bc72290fd330675c7aaa10bf36ffb89@ec2-54-83-196-179.compute-1.amazonaws.com:5432/d95sb06fki89m4",
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        // Ensure that foreign key constraints will be enabled
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/gtd.sqlite3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // Ensure that foreign key constraints will be enabled
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};
