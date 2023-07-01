# Fastify REST API

This is a RESTful API developed using [Fastify](https://fastify.dev), aiming for learning purposes of the microframework.

## Description

The Fastify REST API is a simple application that provides endpoints to interact with resources in a specific domain. It utilizes the Fastify framework, known for its high performance and efficiency in processing HTTP requests, while maintaining TypeScript and ESM consistently.

## Resources

The API offers the following resources:

- **Transactions**: Management of transactions with basic operations such as creating a transaction, listing all transactions, retrieving a single transaction, and obtaining a total summary of the debited and credited values of the account. All actions are isolated between users, allowing access to only their own transaction information.

## Installation

Follow the instructions below to set up and run the project on your local environment:

1. Clone this repository to your computer using the command:

```shell
git clone https://github.com/FernandoBrino/api-rest-fastify.git
```

2. Access the project directory:

```shell
cd api-rest-fastify
```

3. Install the project dependencies:

```shell
npm install
```

4. Start the development server:

```shell
npm start
```

5. The server will be running locally at `http://localhost:3333`.

## Usage

After starting the server, you can use the API through HTTP requests. Here are some examples of how to interact with the available resources:

- **Transactions**
  - **POST /transactions**: Create a new transaction.
  - **GET /transactions**: List all transactions.
  - **GET /transactions/:id**: Get information about a single transaction.
  - **GET /transactions/summary**: Get a summary of the total value, based on the credited and debited values in the transactions.

- **DTO's**

  Example of creating a transaction:
  ```
    {
      "title": "New transaction",
      "amount": 5000,
      "type": "credit"
    }
  ```

  - title: The title of the transaction.
  - amount: The value of the transaction.
  - type: The type of transaction, can be "credit" (add) or "debit" (subtract).

Make sure to replace `:id` with the actual user or product identifiers when making specific requests.

## Contribution

Contributions are welcome! If you find any issues, have suggestions, or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---
Created by [Fernando Brino](https://github.com/FernandoBrino)
