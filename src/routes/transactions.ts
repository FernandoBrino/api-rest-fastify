import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    // Validation schema for request body parameters
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    // Validating if request body parameters match my schema
    // The 'parse' function automatically throw an error if doesn't match my shema
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body
    );

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
    });

    return reply.status(201).send();
  });
}
