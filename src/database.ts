import { knex as setupeKnex, Knex } from "knex";

export const config: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: "./db/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupeKnex(config);
