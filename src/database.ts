import { knex as setupeKnex } from "knex";

export const knex = setupeKnex({
  client: "sqlite",
  connection: {
    filename: "./tmp/app.db",
  },
});
