import { beforeAll, afterAll, describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../src/app";

// describe = Categorization of tests
describe("Transactions routes", () => {
  // Await all plugins is registed (app to be ready), before start to run all tests
  beforeAll(async () => {
    await app.ready();
  });

  // After all test, ends the app
  afterAll(async () => {
    await app.close();
  });

  // Description
  // What the test is supposed to do
  // Validation
  it("should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);

    // expect(response.statusCode).toEqual(201); // Long sintax without using supertest lib
  });

  // Any test should be excluded of any context, a test can't be dependent of others tests
  it("sould be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New transaction",
        amount: 5000,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "New transaction",
        amount: 5000,
      }),
    ]);
  });
});
