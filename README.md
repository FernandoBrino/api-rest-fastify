# API Rest Fastify

Esta é uma API Restful desenvolvida utilizando [Fastify](https://fastify.dev), vizando o aprendizado do microframework.

## Descrição

A API Rest Fastify é uma aplicação simples que fornece endpoints para interagir com recursos de um determinado domínio. Ela utiliza o framework Fastify, conhecido por sua alta performance e eficiência no processamento de requisições HTTP, além de manter o Typescript e o ESM de forma consistente.
## Recursos

A API oferece os seguintes recursos:

- **Transações**: Gerenciamento de transações com operações básicas como a criação de uma transação, a listagem de todas transações, de uma unica transação e um resumo total dos valores debitados e creditados da conta. Sendo todas as ações isoladas entre os usuários, sendo possível obter informações apenas de suas transações por exemplo.

## Instalação

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local:

1. Clone este repositório para o seu computador utilizando o comando:

```shell
git clone https://github.com/FernandoBrino/api-rest-fastify.git
```

2. Acesse o diretório do projeto:

```shell
cd api-rest-fastify
```

3. Instale as dependências do projeto:

```shell
npm install
```

4. Inicie o servidor de desenvolvimento:

```shell
npm start
```

5. O servidor estará em execução localmente em `http://localhost:3333`.

## Utilização

Após iniciar o servidor, você poderá utilizar a API através de requisições HTTP. Aqui estão alguns exemplos de como interagir com os recursos disponíveis:

- **Transações**
  - **POST /transactions**: Cria uma nova transação.
  - **GET /transactions**: Lista todas transações.
  - **GET /transactions/:id**: Obtém informações de uma única transação.
  - **GET /transactions/summary**: Obtém um resumo do valor total, baseado nos valores creditos e debitados nas transações.

- **DTO's**
  
  Exemplo criação de uma transação:
  ```
    {
      "title": "Nova transação",
      "amount": 5000,
      "type": "credit"
    }
  ```

  - title: O título da transação.
  - amount: O valor da transação.
  - type: O tipo da transação, pode ser "credit" (soma) ou "debit" (subtrai).


Certifique-se de substituir `:id` pelos identificadores reais dos usuários ou produtos ao fazer requisições específicas.

## Contribuição

Contribuições são bem-vindas! Se você encontrou algum problema, tem sugestões ou deseja adicionar novos recursos, fique à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a ISC License.

---
Criado por [Fernando Brino](https://github.com/FernandoBrino)
