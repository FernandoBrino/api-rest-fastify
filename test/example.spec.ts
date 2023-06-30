import { expect, test } from "vitest";

// Conceitos principais teste

// Descrição
// O que o teste está proposto a fazer
// Validação

test("user can create new transaction", () => {
  const responseStatusCode = 201;

  expect(responseStatusCode).toEqual(201);
});
