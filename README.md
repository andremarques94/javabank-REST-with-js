## Mini "JavaScript"bank

### Description

This is a mini bank REST API based in the read javabank. It has the same endpoints and functionalities as the original one, but it is written in JavaScript.
The idea is to implement this in a hands-on as a final showcase of the Bootcamp.

The last time I did this I only implemented the customer endpoints
and the objective was to connect this REST API to the "Javabank CRUD" frontend exercise.

Like this they're able to see the full stack in action.

### Endpoints

## Account

- GET /account
- GET /account/:id

## Customer

- GET /customers
- GET /customers/:id
- POST /customer
- PUT /customer/:id
- DELETE /customer/:id

### Technologies

- Node.js
- Express
- Nodemon
- Objection.js / Knex.js
- MySQL

### How to run in development mode

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

### How to run in production mode

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
