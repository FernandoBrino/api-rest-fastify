import { test, beforeAll, afterAll, describe } from "vitest";
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
  test("user can create a new transaction", async () => {
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
});
