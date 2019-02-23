const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  // For Knex CLI only (use config named "server" for actual dev use) - need to do this for file pathing
  development: {
    client: "pg",
    connection:
      "postgres://drikmtkppkdjlg:d861aaa27c40567e80da0c9cc288f7265bc72290fd330675c7aaa10bf36ffb89@ec2-54-83-196-179.compute-1.amazonaws.com:5432/d95sb06fki89m4",
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  // For actual dev use - need to keep this DB environment separate from "development" for pathing
  devServer: {
    client: "pg",
    connection:
      "postgres://drikmtkppkdjlg:d861aaa27c40567e80da0c9cc288f7265bc72290fd330675c7aaa10bf36ffb89@ec2-54-83-196-179.compute-1.amazonaws.com:5432/d95sb06fki89m4",
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
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
    client: "pg",
    connection:
      "postgres://drikmtkppkdjlg:d861aaa27c40567e80da0c9cc288f7265bc72290fd330675c7aaa10bf36ffb89@ec2-54-83-196-179.compute-1.amazonaws.com:5432/d95sb06fki89m4",
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
